import React from 'react';
import { useEffect } from 'react';
import { Server, Globe, Shield, Zap, Phone, Mail, MapPin, Check, Star } from 'lucide-react';

function App() {
  useEffect(() => {
    // Add hover message functionality
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
      let tooltip: HTMLDivElement | null = null;
      
      const showTooltip = (e: MouseEvent) => {
        tooltip = document.createElement('div');
        tooltip.textContent = 'این بخش قابل تغییر است';
        tooltip.className = 'absolute bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-50 pointer-events-none';
        tooltip.style.top = '10px';
        tooltip.style.right = '10px';
        card.appendChild(tooltip);
      };
      
      const hideTooltip = () => {
        if (tooltip) {
          tooltip.remove();
          tooltip = null;
        }
      };
      
      card.addEventListener('mouseenter', showTooltip);
      card.addEventListener('mouseleave', hideTooltip);
    });
    
    // Cleanup function
    return () => {
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach(card => {
        card.removeEventListener('mouseenter', showTooltip);
        card.removeEventListener('mouseleave', hideTooltip);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Server className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">وب سرور ایران</h1>
                <p className="text-sm text-gray-600">خدمات DNS و میزبانی وب</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">خدمات</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">قیمت‌ها</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">درباره ما</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">تماس</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                شروع کنید
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            خدمات DNS و میزبانی وب با کیفیت بالا
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            میزبانی مطمئن، DNS سریع و پشتیبانی ۲۴/۷ برای وب‌سایت شما. با بهترین سرویس‌های ایران آشنا شوید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              مشاهده پکیج‌ها
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              تماس با ما
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-blue-200">آپتایم تضمینی</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">پشتیبانی</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-blue-200">مشتری راضی</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خدمات ما</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              مجموعه کاملی از خدمات DNS و میزبانی وب برای هر نیازی
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="h-12 w-12" />,
                title: "DNS مدیریت شده",
                description: "سرویس DNS با سرعت بالا و قابلیت اطمینان ۹۹.۹%"
              },
              {
                icon: <Server className="h-12 w-12" />,
                title: "میزبانی وب",
                description: "میزبانی سایت با سرورهای قدرتمند و SSD"
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "امنیت SSL",
                description: "گواهینامه SSL رایگان برای تمام پلن‌ها"
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "CDN سریع",
                description: "شبکه توزیع محتوا برای بارگذاری سریع‌تر"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group service-card relative">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">پکیج‌های قیمتی</h2>
            <p className="text-xl text-gray-600">بهترین قیمت‌ها برای خدمات با کیفیت</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "پایه",
                price: "50,000",
                popular: false,
                features: [
                  "1 دامنه",
                  "10 GB فضای ذخیره‌سازی",
                  "100 GB ترافیک",
                  "SSL رایگان",
                  "پشتیبانی ایمیل"
                ]
              },
              {
                name: "حرفه‌ای",
                price: "120,000",
                popular: true,
                features: [
                  "5 دامنه",
                  "50 GB فضای ذخیره‌سازی",
                  "500 GB ترافیک",
                  "SSL رایگان",
                  "پشتیبانی ۲۴/۷",
                  "پشتیبان گیری روزانه"
                ]
              },
              {
                name: "کسب و کار",
                price: "250,000",
                popular: false,
                features: [
                  "دامنه نامحدود",
                  "200 GB فضای ذخیره‌سازی",
                  "ترافیک نامحدود",
                  "SSL رایگان",
                  "پشتیبانی اولویت‌دار",
                  "پشتیبان گیری روزانه",
                  "CDN رایگان"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 ml-1" />
                      محبوب‌ترین
                    </div>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">{plan.price}</div>
                  <div className="text-gray-600 mb-8">تومان / ماهانه</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 ml-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  انتخاب پکیج
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">چرا وب سرور ایران؟</h2>
              <p className="text-lg text-gray-600 mb-8">
                این وب سایت یک سایت تازه ساخت با امنیت بالا است
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">n</div>
                  <div className="text-gray-600">سال تجربه</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">آپتایم</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">n</div>
                  <div className="text-gray-600">مشتری</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">پشتیبانی</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl">
              <div className="text-center">
                <Server className="h-24 w-24 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">سرورهای مدرن</h3>
                <p className="text-gray-700">
                  استفاده از سرورهای SSD با سرعت بالا و پردازنده‌های قدرتمند 
                  برای بهترین عملکرد وب‌سایت شما
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">تماس با ما</h2>
            <p className="text-xl text-gray-300">آماده پاسخگویی به سوالات شما هستیم</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">پیام خود را ارسال کنید</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="نام و نام خانوادگی"
                      className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="آدرس ایمیل"
                      className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="موضوع پیام"
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <textarea
                    rows={6}
                    placeholder="متن پیام شما..."
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  ></textarea>
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full md:w-auto">
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">تلفن تماس</h4>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">ایمیل</h4>
                  <p className="text-gray-300">info@webserver.ir</p>
                  <p className="text-gray-300">support@webserver.ir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Server className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">وب سرور ایران</span>
              </div>
              <p className="text-gray-400">
                ارائه‌دهنده خدمات DNS و میزبانی وب با کیفیت بالا در ایران
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">خدمات</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">میزبانی وب</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DNS مدیریت شده</a></li>
                <li><a href="#" className="hover:text-white transition-colors">گواهینامه SSL</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CDN</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">پشتیبانی</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">مرکز راهنما</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
                <li><a href="#" className="hover:text-white transition-colors">گزارش مشکل</a></li>
                <li><a href="#" className="hover:text-white transition-colors">وضعیت سرویس</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">شرکت</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">درباره ما</a></li>
                <li><a href="#" className="hover:text-white transition-colors">بلاگ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">شرایط استفاده</a></li>
                <li><a href="#" className="hover:text-white transition-colors">حریم خصوصی</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© ۱۴۰۳ وب سرور ایران. تمام حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;