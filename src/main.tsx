import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/globals.css';
import HomePage from './pages/index';
import OnboardingPage from './pages/onboarding';
import GamesPage from './pages/games';
import VideoPage from './pages/video';
import MusicPage from './pages/music';
import ChatPage from './pages/chat';
import AiPage from './pages/ai';
import CommunityPage from './pages/community';
import AboutPage from './pages/about';
import BrowserPage from './pages/browser';
import NotFoundPage from './pages/_404';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/onboarding', element: <OnboardingPage /> },
  { path: '/games', element: <GamesPage /> },
  { path: '/video', element: <VideoPage /> },
  { path: '/music', element: <MusicPage /> },
  { path: '/chat', element: <ChatPage /> },
  { path: '/ai', element: <AiPage /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/browser', element: <BrowserPage /> },
  { path: '*', element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
