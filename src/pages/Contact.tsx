import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main>
      <section className="pt-32 pb-20 px-6">

        <div className="text-center mb-12">
          <h2 className="text-7xl">Bất Kì Câu Hỏi Nào !</h2>
          <p className="text-7xl font-bold">Sắn sàng lắng nghe.</p>
        </div>
        <div className="container mx-auto max-w-3xl">
          <motion.div className="mb-8 flex justify-between "
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="border rounded-2xl p-4 w-2/5">
              <h3 className="font-bold text-blue-500">Thông tin liên lạc</h3>
              <p>nguyensangtrong31012004@gmail.com</p>
              <p>037 97 23 024</p>
            </div>
            <div className="border rounded-2xl p-4 w-2/5">
              <h3 className="font-bold text-blue-500">Địa chỉ</h3>
              <p>34 Nguyễn Sáng, Tây Thạnh</p>
              <p>Tân Phú, TP.HCM, Việt Nam</p>
            </div>
          </motion.div>
          <form className="space-y-4 border p-6 rounded ">
            <div>
              <label htmlFor="">
                <span className="block mb-2 font-semibold">Họ Tên</span>
              </label>
              <input className="w-full p-3 border rounded" placeholder="Tên của bạn" />
            </div>
            <div>
              <label htmlFor="">
                <span className="block mb-2 font-semibold">Email</span>
              </label>
              <input className="w-full p-3 border rounded" placeholder="Email" type="email" />
            </div>
            <div>
              <label htmlFor="">
                <span className="block mb-2 font-semibold">Nội Dung</span>
              </label>
              <textarea className="w-full p-3 border rounded" placeholder="Nội dung" rows={5} />
            </div>
            <button type="submit" className="w-full p-3 rounded bg-blue-500 hover:bg-blue-600 transition">Gửi</button>
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
