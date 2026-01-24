'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  description: string;
  responseTime?: string;
}

export default function StatusPage() {
  const [mounted, setMounted] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setMounted(true);
    setLastUpdated(new Date().toLocaleString());
  }, []);

  // Example service statuses (in real implementation, these would be fetched from an API)
  const services: ServiceStatus[] = [
    {
      name: 'Website',
      status: 'operational',
      description: 'Main website and frontend',
      responseTime: '45ms',
    },
    {
      name: 'API',
      status: 'operational',
      description: 'REST API endpoints',
      responseTime: '120ms',
    },
    {
      name: 'Database',
      status: 'operational',
      description: 'Primary database cluster',
      responseTime: '15ms',
    },
    {
      name: 'Authentication',
      status: 'operational',
      description: 'Login and authentication services',
      responseTime: '80ms',
    },
  ];

  const getStatusColor = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return {
          bg: 'bg-lime/10',
          border: 'border-lime',
          text: 'text-lime',
          dot: 'bg-lime',
        };
      case 'degraded':
        return {
          bg: 'bg-coral/10',
          border: 'border-coral',
          text: 'text-coral',
          dot: 'bg-coral',
        };
      case 'down':
        return {
          bg: 'bg-primary/10',
          border: 'border-primary',
          text: 'text-primary',
          dot: 'bg-primary',
        };
    }
  };

  const getStatusText = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return 'All Systems Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'down':
        return 'System Outage';
    }
  };

  const overallStatus = services.every((s) => s.status === 'operational')
    ? 'operational'
    : services.some((s) => s.status === 'down')
      ? 'down'
      : 'degraded';

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Status Content Section */}
      <section className="relative flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              System{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-lime bg-clip-text text-transparent">
                Status
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Real-time status of DSEC services and infrastructure
            </p>
          </div>

          {/* Overall Status Card */}
          {mounted && (
            <div
              className={`${getStatusColor(overallStatus).bg} ${getStatusColor(overallStatus).border} border rounded-lg p-6 mb-8`}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 ${getStatusColor(overallStatus).dot} rounded-full animate-pulse`}
                  />
                  <div>
                    <h2
                      className={`text-xl font-semibold ${getStatusColor(overallStatus).text}`}
                    >
                      {getStatusText(overallStatus)}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Last updated: {lastUpdated}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setLastUpdated(new Date().toLocaleString())}
                  className="px-4 py-2 bg-card hover:bg-card/80 border border-border rounded-lg text-sm font-medium transition-all hover:scale-105"
                >
                  Refresh Status
                </button>
              </div>
            </div>
          )}

          {/* Individual Service Statuses */}
          <div className="space-y-4 mb-12">
            <h3 className="text-xl font-semibold mb-4">Service Status</h3>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-3 h-3 ${getStatusColor(service.status).dot} rounded-full ${service.status === 'operational' ? 'animate-pulse' : ''}`}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {service.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {service.responseTime && (
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          Response Time
                        </p>
                        <p className="text-sm font-mono text-secondary">
                          {service.responseTime}
                        </p>
                      </div>
                    )}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(service.status).bg} ${getStatusColor(service.status).text}`}
                    >
                      {service.status.charAt(0).toUpperCase() +
                        service.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status History (placeholder) */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Uptime History</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Last 30 days
                </span>
                <span className="text-2xl font-bold text-lime">99.98%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[99.98%] bg-gradient-to-r from-lime to-secondary" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-lime">100%</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last 24h
                  </p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-lime">99.99%</p>
                  <p className="text-xs text-muted-foreground mt-1">Last 7d</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-lime">99.98%</p>
                  <p className="text-xs text-muted-foreground mt-1">Last 30d</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-lime">99.95%</p>
                  <p className="text-xs text-muted-foreground mt-1">Last 90d</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative code-like element */}
          <p className="mt-12 text-center font-mono text-xs text-muted-foreground/60">
            monitoring: ACTIVE | uptime: 99.98% | location: AU-EAST
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
