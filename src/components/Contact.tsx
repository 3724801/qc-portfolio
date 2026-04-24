import { Mail, Send, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xnnoggpl", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (response.ok) {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus(""), 2000);
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-lg mx-auto bg-slate-800/50 p-8 rounded-xl border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Sending..." : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>

            {/* Status */}
            {status === "success" && (
              <div className="flex items-center justify-center gap-2 text-green-400 mt-4">
                <CheckCircle2 size={20} />
                <span>Message sent successfully!</span>
              </div>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center mt-4">
                Something went wrong. Try again.
              </p>
            )}
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-10">
            
            {/* GitHub */}
            <a
              href="https://github.com/3724801"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <Github className="text-cyan-400" size={24} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mahytab-a-62b886229/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="text-cyan-400" size={24} />
            </a>

            {/* Email */}
            <a
              href="mailto:mahyadel177@gmail.com"
              className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <Mail className="text-cyan-400" size={24} />
            </a>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-800">
          <p className="text-center text-gray-400">
            2025 Mahytab Adel. Designed with passion for Quality Control.
          </p>
        </footer>
      </div>
    </section>
  );
}