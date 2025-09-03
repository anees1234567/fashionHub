
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { NotificationProvider } from './notification/context.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './Auth/AuthProvider.js'
import { BrowserRouter } from 'react-router-dom'



const queryclient= new QueryClient
createRoot(document.getElementById('root')!).render(

   <AuthProvider>
      <QueryClientProvider client={queryclient} >
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </QueryClientProvider>
   </AuthProvider>

)
