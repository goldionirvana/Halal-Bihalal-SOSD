/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
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
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !hasStartedRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          hasStartedRef.current = true;
          // Remove listeners once playing
          removeListeners();
        }).catch(err => {
          console.log("Playback failed, waiting for interaction:", err);
        });
      }
    };

    const removeListeners = () => {
      window.removeEventListener('click', playAudio);
      window.removeEventListener('touchstart', playAudio);
      window.removeEventListener('scroll', playAudio);
      window.removeEventListener('keydown', playAudio);
    };

    // Initial attempt
    playAudio();

    // Listen for any user interaction
    window.addEventListener('click', playAudio);
    window.addEventListener('touchstart', playAudio);
    window.addEventListener('scroll', playAudio);
    window.addEventListener('keydown', playAudio);

    return () => removeListeners();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("10732090421");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.log("Playback failed:", err));
      }
    }
  };

  const googleCalendarUrl = "https://www.google.com/calendar/render?action=TEMPLATE&text=Halal+Bihalal+Store+Ops+%26+Dev&details=Silaturahmi+Keluarga+Besar+Store+Operational+%26+Store+Development&location=Panderman+Resto+by+El+Hotel+Malang&dates=20260412T033000Z%2F20260412T070000Z";
  const googleMapsUrl = "https://maps.app.goo.gl/67yNghttK9biCvkH8";

  // Provided location image
  const locationPhoto = "https://pix8.agoda.net/hotelImages/536337/-1/d0b4cde4d60b729ac360b641a202d7d2.jpg?ce=0&s=1024x";
  const hotelPhoto2 = "https://assets.el-hotels.com/elhotel/2e211043-62d0-4a82-b215-fc72cad4702a.jpeg?tr=w-1200,h-900,q-100";
  const hotelPhoto3 = "https://assets.el-hotels.com/elhotel/12247907-b69f-4b26-846d-71cba028a348.jpeg?tr=w-1200,h-900,q-100";

  return (
    <div className="min-h-screen bg-idul-paper text-idul-ink font-sans selection:bg-idul-green/20 overflow-x-hidden">
      {/* Audio Element - Islamic Instrumental */}
      <audio 
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2022/03/24/audio_3232239d30.mp3" 
        loop 
        autoPlay
      />

      <div className="relative">
        {/* Music Toggle Button */}
        <button 
          onClick={toggleMusic}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-idul-brown text-white shadow-2xl border border-white/10 active:scale-90 transition-all hover:bg-idul-brown/90"
        >
          {isPlaying ? <Volume2 className="w-6 h-6 animate-pulse" /> : <VolumeX className="w-6 h-6" />}
        </button>

        {/* Hero Section / Header */}
        <header className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://disparekrafbudpora.gresikkab.go.id/content/uploads/gacoan.jpg" 
              className="w-full h-full object-cover scale-105"
              alt="Header Background"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="mb-8 inline-block">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Moon className="w-16 h-16 text-idul-yellow mx-auto drop-shadow-[0_0_15px_rgba(233,196,106,0.6)]" />
                </motion.div>
              </div>
              
              <h2 className="text-idul-yellow font-serif italic text-2xl mb-4 tracking-wide drop-shadow-md">Undangan Silaturahmi</h2>
              <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-6 leading-none drop-shadow-xl">
                Halal <span className="text-idul-yellow italic font-light">&</span> Bihalal
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-white/40" />
                <p className="text-sm md:text-base text-white font-medium tracking-[0.4em] uppercase drop-shadow-md">
                  Store Operations <span className="text-idul-yellow">&</span> Store Development
                </p>
                <div className="h-[1px] w-12 bg-white/40" />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12"
              >
                <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-idul-yellow/50" />
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Islamic Geometric Background Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15zM0 30l15 15-15 15-15-15zM60 30l15 15-15 15-15-15zM30 60l15 15-15 15-15-15z' fill='%2376C893' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
        />

        <main className="relative max-w-3xl mx-auto px-6 py-24 z-10">
            
            {/* Greeting Section */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="text-center mb-32"
            >
              <div className="flex justify-center mb-10">
                <div className="p-6 rounded-full bg-idul-green/5 border border-idul-green/10 shadow-inner">
                  <Moon className="w-12 h-12 text-idul-green fill-idul-green/5" />
                </div>
              </div>
              
              <h3 className="text-idul-green font-serif italic text-2xl mb-6">Assalamu'alaikum Warahmatullahi Wabarakatuh</h3>
              
              <p className="text-idul-ink/70 leading-relaxed mb-16 max-w-xl mx-auto text-lg font-light">
                Dengan mengharap ridho Allah SWT, kami mengundang Bapak/Ibu/Rekan-rekan sekalian untuk hadir dalam acara silaturahmi dan Halal Bihalal Keluarga Besar Store Operations & Store Development.
              </p>

              <div className="flex items-center justify-center gap-6 mb-16">
                <div className="h-[1px] flex-1 max-w-[80px] bg-idul-tan/20" />
                <Heart className="w-5 h-5 text-idul-yellow fill-idul-yellow/20" />
                <div className="h-[1px] flex-1 max-w-[80px] bg-idul-tan/20" />
              </div>
              
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-idul-green/5 blur-xl rounded-full" />
                <div className="relative bg-white/40 backdrop-blur-md border border-idul-green/10 rounded-[3rem] px-12 py-10 shadow-sm">
                  <p className="italic text-3xl md:text-4xl font-serif text-idul-brown leading-tight font-medium">
                    "Kerja Keras Menyatukan,<br />
                    <span className="text-idul-tan not-italic font-light">Silaturahmi Menguatkan"</span>
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Location Photo Section */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-32"
            >
              <div className="flex flex-col items-center mb-12">
                <Camera className="w-8 h-8 text-idul-tan mb-4" />
                <h2 className="text-4xl font-serif font-bold text-idul-brown tracking-tight">Lokasi Acara</h2>
                <div className="h-1 w-12 bg-idul-yellow mt-2 rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="relative aspect-[16/9] md:aspect-auto md:row-span-2 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
                >
                  <img 
                    src={locationPhoto} 
                    alt="Panderman Resto El Hotel Malang"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-idul-brown/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-10 text-white">
                    <p className="font-serif italic text-2xl drop-shadow-md">Panderman Resto</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white group"
                >
                  <img 
                    src={hotelPhoto2} 
                    alt="El Hotel Malang View 1"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white group"
                >
                  <img 
                    src={hotelPhoto3} 
                    alt="El Hotel Malang View 2"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-idul-brown/60 font-serif italic text-xl">by El Hotel Malang</p>
              </div>
            </motion.section>

            {/* Event Details Card */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-[4rem] shadow-[0_32px_64px_-12px_rgba(118,200,147,0.12)] p-12 md:p-20 mb-32 border border-idul-green/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-idul-green/5 rounded-bl-[10rem] -mr-32 -mt-32 opacity-50" />
              
              <div className="relative z-10 flex flex-col gap-16">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-center md:text-left">
                  <div className="p-6 rounded-[2rem] bg-idul-brown text-idul-yellow shadow-2xl shadow-idul-brown/20 rotate-3">
                    <MapPin className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-idul-brown/40 uppercase tracking-[0.4em] mb-4">Tempat Berkumpul</h3>
                    <p className="text-3xl md:text-4xl font-serif font-bold text-idul-brown leading-tight mb-8">
                      Panderman Resto by <br />
                      <span className="text-idul-tan italic font-medium">El Hotel Malang</span>
                    </p>
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-bold text-idul-blue hover:bg-idul-blue hover:text-white transition-all bg-idul-blue/5 px-8 py-4 rounded-full border border-idul-blue/20"
                    >
                      Navigasi Google Maps <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-idul-green/10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                    <div className="p-5 rounded-2xl bg-idul-green/10 text-idul-green">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-idul-brown/40 uppercase tracking-[0.4em] mb-4">Hari & Tanggal</h3>
                      <p className="text-2xl font-serif font-bold text-idul-brown mb-6">Minggu, 12 April 2026</p>
                      <a 
                        href={googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-xs font-bold text-idul-tan hover:bg-idul-tan hover:text-white transition-all bg-idul-tan/5 px-6 py-3 rounded-full border border-idul-tan/20"
                      >
                        Simpan Jadwal <CalendarPlus className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                    <div className="p-5 rounded-2xl bg-idul-green/10 text-idul-green">
                      <Clock className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-idul-brown/40 uppercase tracking-[0.4em] mb-4">Waktu Acara</h3>
                      <p className="text-2xl font-serif font-bold text-idul-brown">10.30 WIB – Selesai</p>
                      <p className="text-sm text-idul-brown/50 mt-2 italic">Diharapkan hadir tepat waktu</p>
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
              className="text-center mb-32 px-6"
            >
              <div className="max-w-2xl mx-auto">
                <p className="text-idul-brown/80 leading-relaxed font-serif italic text-2xl md:text-3xl">
                  "Taqabbalallahu minna wa minkum. Semoga Allah menerima amal ibadah kami dan kamu semua."
                </p>
              </div>
            </motion.section>

            {/* Dress Code Section */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
              <div className="flex flex-col items-center mb-10">
                <div className="p-4 rounded-full bg-idul-tan/10 mb-4">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3062/3062181.png" 
                    className="w-8 h-8 opacity-60" 
                    alt="Dress Code Icon"
                  />
                </div>
                <h2 className="text-4xl font-serif font-bold text-idul-brown">Dress Code</h2>
                <p className="text-idul-tan font-serif italic text-xl mt-2">Tema: Es Teh (Earth Tones)</p>
                <div className="h-1 w-12 bg-idul-yellow mt-4 rounded-full" />
              </div>

              <div className="bg-white rounded-[3.5rem] p-6 md:p-10 shadow-2xl border border-idul-green/5 relative overflow-hidden">
                <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-inner group">
                  <img 
                    src="https://image.popbela.com/post/20250514/upload_d25a54a970bc9020af62b428221c4395.png" 
                    alt="Dress Code Reference - Earth Tones"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-idul-brown/40 to-transparent" />
                </div>
                
                <div className="text-center px-4">
                  <p className="text-idul-brown/70 leading-relaxed max-w-lg mx-auto font-light text-lg">
                    Gunakan pakaian dengan nuansa warna <span className="font-bold text-idul-brown">Earth Tones</span> (Cokelat, Tan, Krem, Beige) terinspirasi dari segarnya Es Teh.
                  </p>
                  <div className="flex justify-center gap-3 mt-8">
                    <div className="w-8 h-8 rounded-full bg-[#4B3621] shadow-sm" title="Dark Tea" />
                    <div className="w-8 h-8 rounded-full bg-[#8B5E3C] shadow-sm" title="Medium Tea" />
                    <div className="w-8 h-8 rounded-full bg-[#C2B280] shadow-sm" title="Milk Tea" />
                    <div className="w-8 h-8 rounded-full bg-[#F5F5DC] shadow-sm" title="Ice Cube" />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Contribution Section */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
              <div className="flex flex-col items-center mb-10">
                <Users className="w-8 h-8 text-idul-tan mb-4" />
                <h2 className="text-4xl font-serif font-bold text-idul-brown">Iuran Kebersamaan</h2>
                <div className="h-1 w-12 bg-idul-yellow mt-2 rounded-full" />
              </div>
              
              <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-xl border border-idul-green/5 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-idul-green via-idul-yellow to-idul-tan" />
                <p className="text-idul-brown text-xl leading-relaxed mb-8 font-serif italic">
                  "Kehadiran dan doa restu rekan-rekan adalah hadiah terindah bagi kami."
                </p>
                <p className="text-idul-brown/60 leading-relaxed max-w-lg mx-auto font-light">
                  Namun, bagi rekan-rekan yang ingin turut berpartisipasi demi kelancaran acara ini, kami menerima iuran seikhlasnya sebagai wujud kebersamaan dan rasa syukur kita.
                </p>
                <div className="mt-10 flex justify-center">
                  <div className="h-[1px] w-32 bg-idul-tan/10" />
                </div>
              </div>
            </motion.section>

            {/* Payment Section */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-idul-brown text-white rounded-[4rem] p-12 md:p-24 overflow-hidden relative shadow-2xl shadow-idul-brown/40"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-white/5 rounded-b-[100%] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Detail Pembayaran</h2>
                  <p className="text-idul-yellow/70 text-xl italic font-light">Mohon konfirmasi setelah melakukan transfer</p>
                </div>

                <div className="space-y-16">
                  <div className="text-center">
                    <p className="text-idul-green/60 text-xs uppercase tracking-[0.5em] mb-6 font-bold">Nama Bank</p>
                    <p className="text-5xl font-bold tracking-tight text-idul-yellow drop-shadow-sm">BANK JAGO</p>
                  </div>

                  <div className="text-center">
                    <p className="text-idul-green/60 text-xs uppercase tracking-[0.5em] mb-6 font-bold">Nomor Rekening</p>
                    <div className="flex flex-col items-center gap-8">
                      <p className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white">10732090421</p>
                      <button 
                        onClick={copyToClipboard}
                        className="group flex items-center gap-4 px-10 py-5 rounded-2xl bg-idul-green text-idul-brown font-bold transition-all active:scale-95 hover:bg-idul-green/90 shadow-2xl shadow-idul-green/20"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="w-6 h-6" />
                            <span className="uppercase tracking-widest text-xs">Berhasil Disalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            <span className="uppercase tracking-widest text-xs">Salin Rekening</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="text-center pt-8">
                    <p className="text-idul-green/60 text-xs uppercase tracking-[0.5em] mb-6 font-bold">Atas Nama</p>
                    <p className="text-4xl font-serif font-bold tracking-wide text-white">IRA NUR AINI</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Closing Greeting */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-40 text-center space-y-10"
            >
              <div className="space-y-4">
                <p className="text-idul-green font-serif italic text-3xl">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
                <div className="flex justify-center gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-idul-green/30" />
                  ))}
                </div>
              </div>
              
              <div className="pt-12 border-t border-idul-tan/10">
                <p className="text-idul-brown/30 text-[10px] font-bold tracking-[0.8em] uppercase">
                  Sampai Jumpa di Hari Kemenangan
                </p>
              </div>
            </motion.section>
          </main>
        </div>
    </div>
  );
}
