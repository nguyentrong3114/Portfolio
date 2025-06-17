import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main>
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-lg">
          <motion.h1 className="text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Liên hệ
          </motion.h1>
          <form className="space-y-4">
            <input className="w-full p-3 border rounded" placeholder="Tên của bạn" />
            <input className="w-full p-3 border rounded" placeholder="Email" type="email" />
            <textarea className="w-full p-3 border rounded" placeholder="Nội dung" rows={5} />
            <button type="submit" className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-600 transition">Gửi</button>
          </form>
          <div className="mt-8 text-center">
            <p>Email: <a href="mailto:your@email.com" className="underline">your@email.com</a></p>
            <p>GitHub: <a href="https://github.com/yourusername" className="underline">github.com/yourusername</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
