import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-gray-900 text-gray-300 mt-10">
  <div class="max-w-7xl mx-auto px-6 py-4">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div>
        <h2 class="text-2xl font-bold text-white">WebiNest</h2>
        <p class="mt-4 text-sm text-gray-400">
          Seamless event & webinar registrations.  
          Join, learn, and connect with experts worldwide.
        </p>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-white ">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#home" class="hover:text-white">Home</a></li>
          <li><a href="#agenda" class="hover:text-white">Agenda</a></li>
          <li><a href="#speakers" class="hover:text-white">Speakers</a></li>
          <li><a href="#register" class="hover:text-white">Register</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Contact</h3>
        <p class="text-sm">Email: support@eventzen.com</p>
        <p class="text-sm mt-2">Phone: +91 98765 43210</p>

        <div class="flex gap-4 mt-2">
          <a href="#" class="hover:text-white">LinkedIn</a>
          <a href="#" class="hover:text-white">Twitter</a>
          <a href="#" class="hover:text-white">YouTube</a>
        </div>
      </div>

    </div>

    <div class="border-t border-gray-700 mt-1 pt-2 text-center text-sm text-gray-400">
      © 2026 EventZen. All rights reserved.
    </div>

  </div>
</footer>

    </div>
  )
}

export default Footer
