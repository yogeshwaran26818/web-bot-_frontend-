import { SignInButton } from '@clerk/clerk-react'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Web Bot</h1>
        <p className="text-gray-600 mb-8">Scrape websites and chat with AI about the content</p>
        <SignInButton mode="modal">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </SignInButton>
      </div>
    </div>
  )
}