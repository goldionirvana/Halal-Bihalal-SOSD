/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  CreditCard, 
  Users, 
  Copy,
  CheckCircle2,
  Moon,
  Heart,
  ExternalLink,
  CalendarPlus,
  ChevronDown,
  Music,
  Volume2,
  VolumeX,
  Camera
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("10732090421");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const googleCalendarUrl = "https://www.google.com/calendar/render?action=TEMPLATE&text=Halal+Bihalal+Store+Ops+%26+Dev&details=Silaturahmi+Keluarga+Besar+Store+Operational+%26+Store+Development&location=Panderman+Resto+by+El+Hotel+Malang&dates=20260412T040000Z%2F20260412T070000Z";
  const googleMapsUrl = "https://maps.app.goo.gl/67yNghttK9biCvkH8";

  // Provided location image
  const locationPhoto = "https://pix8.agoda.net/hotelImages/536337/-1/d0b4cde4d60b729ac360b641a202d7d2.jpg?ce=0&s=1024x";

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3436] font-sans selection:bg-emerald-100 overflow-x-hidden">
      {/* Audio Element */}
      <audio 
        ref={audioRef}
        src="https://www.bensound.com/bensound-music/bensound-tenderness.mp3" 
        loop 
      />

      <div className="relative">
        {/* Music Toggle Button */}
        <button 
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-900 text-white shadow-2xl border border-emerald-700 active:scale-90 transition-all"
        >
          {isPlaying ? <Volume2 className="w-6 h-6 animate-pulse" /> : <VolumeX className="w-6 h-6" />}
        </button>

        {/* Hero Section / Header */}
        <header className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://disparekrafbudpora.gresikkab.go.id/content/uploads/gacoan.jpg?blur=2" 
              className="w-full h-full object-cover brightness-[0.4]"
              alt="Header Background"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Moon className="w-12 h-12 text-amber-400 mx-auto mb-4 drop-shadow-lg" />
              <h2 className="text-amber-200 font-serif italic text-xl mb-1">Undangan Silaturahmi</h2>
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-2">Halal Bihalal</h1>
              <p className="text-sm md:text-lg text-white/80 font-medium tracking-widest uppercase">Store Operational & Store Development</p>
            </motion.div>
          </div>
        </header>

        {/* Islamic Geometric Background Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15zM0 30l15 15-15 15-15-15zM60 30l15 15-15 15-15-15zM30 60l15 15-15 15-15-15z' fill='%23064e3b' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
        />

        <main className="relative max-w-2xl mx-auto px-6 py-16 z-10">
            
            {/* Greeting Section */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-24"
            >
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-full bg-emerald-50 border border-emerald-100">
                  <Moon className="w-10 h-10 text-emerald-700 fill-emerald-700/10" />
                </div>
              </div>
              
              <p className="text-emerald-800 font-serif italic text-xl mb-4">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
              
              <p className="text-emerald-900/70 leading-relaxed mb-12 max-w-lg mx-auto">
                Dengan mengharap ridho Allah SWT, kami mengundang Bapak/Ibu/Rekan-rekan sekalian untuk hadir dalam acara silaturahmi dan Halal Bihalal.
              </p>

              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-[1px] w-12 bg-emerald-200" />
                <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
                <div className="h-[1px] w-12 bg-emerald-200" />
              </div>
              
              <div className="bg-emerald-50/50 backdrop-blur-sm border border-emerald-100 rounded-3xl px-10 py-8 inline-block shadow-sm">
                <p className="italic text-2xl md:text-3xl font-serif text-emerald-800 leading-relaxed">
                  "Kerja Keras Menyatukan,<br />Silaturahmi Menguatkan"
                </p>
              </div>
            </motion.section>

            {/* Location Photo Section */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="flex items-center gap-3 mb-10 justify-center">
                <Camera className="w-6 h-6 text-amber-600" />
                <h2 className="text-3xl font-serif font-bold text-emerald-900 tracking-tight">Lokasi Acara</h2>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
              >
                <img 
                  src={locationPhoto} 
                  alt="Panderman Resto El Hotel Malang"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <p className="font-serif italic text-lg">Panderman Resto by El Hotel Malang</p>
                </div>
              </motion.div>
            </motion.section>

            {/* Event Details Card */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-2xl shadow-emerald-900/5 p-10 md:p-16 mb-24 border border-emerald-50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-bl-[6rem] -mr-20 -mt-20 opacity-50" />
              
              <div className="relative z-10 grid gap-12">
                <div className="flex items-start gap-8">
                  <div className="p-5 rounded-3xl bg-emerald-900 text-amber-400 shadow-xl shadow-emerald-900/20">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-emerald-900/30 uppercase tracking-[0.3em] mb-3">Lokasi Acara</h3>
                    <p className="text-2xl font-serif font-bold text-emerald-900 leading-tight mb-6">
                      Panderman Resto by <br />
                      <span className="text-emerald-700">El Hotel Malang</span>
                    </p>
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-all bg-emerald-50 px-6 py-3 rounded-full border border-emerald-100 hover:shadow-md"
                    >
                      Buka di Google Maps <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-emerald-50" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex items-start gap-8">
                    <div className="p-5 rounded-3xl bg-emerald-50 text-emerald-700">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-emerald-900/30 uppercase tracking-[0.3em] mb-3">Hari & Tanggal</h3>
                      <p className="text-xl font-serif font-bold text-emerald-900 mb-4">12 April 2026</p>
                      <a 
                        href={googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-xs font-bold text-amber-700 hover:text-amber-900 transition-all bg-amber-50 px-4 py-2 rounded-full border border-amber-100 hover:shadow-md"
                      >
                        Simpan ke Kalender <CalendarPlus className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="p-5 rounded-3xl bg-emerald-50 text-emerald-700">
                      <Clock className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-emerald-900/30 uppercase tracking-[0.3em] mb-3">Waktu</h3>
                      <p className="text-xl font-serif font-bold text-emerald-900">11.00 WIB – Selesai</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Message Section */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-24 px-6"
            >
              <p className="text-emerald-800/80 leading-relaxed font-serif italic text-xl">
                "Taqabbalallahu minna wa minkum. Semoga Allah menerima amal ibadah kami dan kamu semua."
              </p>
            </motion.section>

            {/* Contribution Section */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <div className="flex items-center justify-center gap-4 mb-10">
                <Users className="w-6 h-6 text-amber-600" />
                <h2 className="text-3xl font-serif font-bold text-emerald-900">Iuran Kebersamaan</h2>
              </div>
              
              <div className="grid gap-6">
                {[
                  { level: "Head", amount: "Rp500.000", color: "bg-emerald-900 text-white shadow-emerald-900/20" },
                  { level: "Senior Manager", amount: "Rp195.000", color: "bg-white text-emerald-900 border border-emerald-100" },
                  { level: "Manager", amount: "Rp95.000", color: "bg-white text-emerald-900 border border-emerald-100" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`flex items-center justify-between p-8 rounded-[2rem] shadow-lg transition-all ${item.color}`}
                  >
                    <span className="font-bold tracking-widest uppercase text-sm">{item.level}</span>
                    <span className="text-2xl font-serif font-bold">
                      {item.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Payment Section */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#064e3b] text-white rounded-[4rem] p-12 md:p-20 overflow-hidden relative shadow-2xl shadow-emerald-900/40"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-800/30 rounded-b-[100%] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold mb-4">Detail Pembayaran</h2>
                  <p className="text-emerald-300/70 text-lg italic">Mohon konfirmasi setelah melakukan transfer</p>
                </div>

                <div className="space-y-12">
                  <div className="text-center">
                    <p className="text-emerald-400 text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">Nama Bank</p>
                    <p className="text-4xl font-bold tracking-tight text-amber-400">BANK JAGO</p>
                  </div>

                  <div className="text-center">
                    <p className="text-emerald-400 text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">Nomor Rekening</p>
                    <div className="flex flex-col items-center gap-6">
                      <p className="text-5xl font-mono font-bold tracking-tighter">10732090421</p>
                      <button 
                        onClick={copyToClipboard}
                        className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-800 hover:bg-emerald-700 transition-all active:scale-90 border border-emerald-700 shadow-xl"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="w-6 h-6 text-amber-400" />
                            <span className="font-bold text-amber-400 uppercase tracking-widest text-xs">Berhasil Disalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-6 h-6" />
                            <span className="font-bold uppercase tracking-widest text-xs">Salin Rekening</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <p className="text-emerald-400 text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">Atas Nama</p>
                    <p className="text-3xl font-bold tracking-wide">IRA NUR AINI</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Closing Greeting */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-32 text-center space-y-6"
            >
              <p className="text-emerald-800 font-serif italic text-2xl">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-emerald-200" />
                ))}
              </div>
              <p className="text-emerald-900/20 text-[12px] font-bold tracking-[0.6em] uppercase pt-8">
                Sampai Jumpa di Hari Kemenangan
              </p>
            </motion.section>
          </main>
        </div>
    </div>
  );
}
