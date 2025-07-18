/**
 * Analytics and Performance Monitoring
 * Basic analytics without external dependencies
 */

class PortfolioAnalytics {
  constructor() {
    this.sessionId = this.generateSessionId();
    this.events = [];
    this.startTime = Date.now();
    this.isEnabled = true;
  }

  generateSessionId() {
    return 'sess_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  track(event, data = {}) {
    if (!this.isEnabled) return;

    const trackingData = {
      event,
      data,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      language: navigator.language,
      timeOnPage: Date.now() - this.startTime,
    };

    this.events.push(trackingData);

    // Store in localStorage for offline support
    this.saveToStorage();

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', trackingData);
    }
  }

  saveToStorage() {
    try {
      const stored = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
      stored.push(...this.events);

      // Keep only last 100 events
      const recentEvents = stored.slice(-100);
      localStorage.setItem('portfolio_analytics', JSON.stringify(recentEvents));

      this.events = []; // Clear current events
    } catch (error) {
      console.error('Analytics storage error:', error);
    }
  }

  getStoredEvents() {
    try {
      return JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
    } catch (error) {
      console.error('Analytics retrieval error:', error);
      return [];
    }
  }

  // Track page views
  trackPageView() {
    this.track('page_view', {
      title: document.title,
      referrer: document.referrer,
    });
  }

  // Track user interactions
  trackInteraction(element, action) {
    this.track('user_interaction', {
      element: element.tagName,
      action,
      id: element.id,
      className: element.className,
    });
  }

  // Track SQL queries
  trackSQLQuery(query, success, responseTime) {
    this.track('sql_query', {
      query: query.substring(0, 100), // Limit query length
      success,
      responseTime,
      queryLength: query.length,
    });
  }

  // Track errors
  trackError(error, context) {
    this.track('error', {
      message: error.message,
      stack: error.stack,
      context,
    });
  }

  // Track performance metrics
  trackPerformance() {
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      this.track('performance', {
        loadTime: perfData.loadEventEnd - perfData.navigationStart,
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
        firstPaint: this.getFirstPaint(),
      });
    }
  }

  getFirstPaint() {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : null;
  }

  // Generate simple report
  generateReport() {
    const events = this.getStoredEvents();
    const report = {
      totalEvents: events.length,
      uniqueSessions: [...new Set(events.map(e => e.sessionId))].length,
      mostCommonEvents: this.getMostCommonEvents(events),
      averageSessionTime: this.getAverageSessionTime(events),
      errorRate: this.getErrorRate(events),
    };

    console.log('Portfolio Analytics Report:', report);
    return report;
  }

  getMostCommonEvents(events) {
    const eventCounts = {};
    events.forEach(event => {
      eventCounts[event.event] = (eventCounts[event.event] || 0) + 1;
    });

    return Object.entries(eventCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }

  getAverageSessionTime(events) {
    const sessionTimes = events.map(e => e.timeOnPage);
    return sessionTimes.length > 0
      ? sessionTimes.reduce((a, b) => a + b, 0) / sessionTimes.length
      : 0;
  }

  getErrorRate(events) {
    const totalEvents = events.length;
    const errorEvents = events.filter(e => e.event === 'error').length;
    return totalEvents > 0 ? (errorEvents / totalEvents) * 100 : 0;
  }
}

// Initialize analytics
const analytics = new PortfolioAnalytics();

// Track page load
analytics.trackPageView();
analytics.trackPerformance();

// Track errors globally
window.addEventListener('error', event => {
  analytics.trackError(event.error, 'global_error');
});

// Track unhandled promise rejections
window.addEventListener('unhandledrejection', event => {
  analytics.trackError(new Error(event.reason), 'unhandled_promise');
});

// Export for use in other modules
window.portfolioAnalytics = analytics;
