/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, PageRoute } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TemporadaPage } from './pages/TemporadaPage';
import { ConhecaONavioPage } from './pages/ConhecaONavioPage';
import { ContactPage } from './pages/ContactPage';
import { EventDetailPage } from './components/EventDetailPage';
import { ALL_CRUISE_EVENTS } from './data/cruises';
import { CruiseEvent } from './types/cruise';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedEvent, setSelectedEvent] = useState<CruiseEvent | null>(null);

  // Hash Routing Synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').trim();

      if (hash.startsWith('evento/')) {
        const eventId = hash.replace('evento/', '');
        const found = ALL_CRUISE_EVENTS.find((e) => e.id === eventId);
        if (found) {
          setSelectedEvent(found);
          setCurrentPage('event');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      switch (hash) {
        case 'sobre-nos':
        case 'sobre':
        case 'quem-somos':
          setCurrentPage('about');
          break;
        case 'temporada':
        case 'temporada-2026-2027':
        case 'temporada-26-27':
          setCurrentPage('temporada');
          break;
        case 'conheca-o-navio':
        case 'navio':
          setCurrentPage('ship');
          break;
        case 'contato':
        case 'fale-conosco':
          setCurrentPage('contact');
          break;
        case '':
        case 'inicio':
        case 'home':
        default:
          setCurrentPage('home');
          break;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigatePage = (page: 'home' | 'about' | 'temporada' | 'ship' | 'contact') => {
    setCurrentPage(page);
    switch (page) {
      case 'home':
        window.location.hash = '#/';
        break;
      case 'about':
        window.location.hash = '#/sobre-nos';
        break;
      case 'temporada':
        window.location.hash = '#/temporada';
        break;
      case 'ship':
        window.location.hash = '#/conheca-o-navio';
        break;
      case 'contact':
        window.location.hash = '#/contato';
        break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEvent = (event: CruiseEvent) => {
    setSelectedEvent(event);
    setCurrentPage('event');
    window.location.hash = `#/evento/${event.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f0f6fc] text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-[#002244]">
      {/* Header: Logo on left, navigation on right (Início, Sobre nós, Temporada 26/27, Conheça o navio, Contato) */}
      <Header
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onSelectEvent={handleSelectEvent}
      />

      {/* Main Pages Content Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onSelectEvent={handleSelectEvent}
            onNavigateToShip={() => handleNavigatePage('ship')}
            onNavigateToAbout={() => handleNavigatePage('about')}
            onNavigateToTemporada={() => handleNavigatePage('temporada')}
            onNavigateToContact={() => handleNavigatePage('contact')}
          />
        )}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'temporada' && (
          <TemporadaPage onSelectEvent={handleSelectEvent} />
        )}

        {currentPage === 'ship' && <ConhecaONavioPage />}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'event' && selectedEvent && (
          <EventDetailPage
            event={selectedEvent}
            onBack={() => handleNavigatePage('temporada')}
          />
        )}
      </main>

      {/* Standard Footer */}
      <Footer
        onNavigatePage={handleNavigatePage}
        onSelectEvent={handleSelectEvent}
      />

      {/* Floating WhatsApp Widget on all pages */}
      <FloatingWhatsApp />
    </div>
  );
}
