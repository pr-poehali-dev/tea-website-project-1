import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import HoverDropdown from "@/components/HoverDropdown";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5DC]/30">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-[#6B8E23] text-3xl font-bold font-montserrat">
              ООчень чайный
            </span>
            <Icon name="Coffee" className="h-8 w-8 text-[#8B4513]" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <HoverDropdown
              trigger={
                <a
                  href="#types"
                  className="text-gray-600 hover:text-[#6B8E23] transition-colors font-open-sans cursor-pointer"
                >
                  Виды чая
                </a>
              }
            >
              <div className="py-1">
                <a
                  href="#green"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#6B8E23] transition-colors"
                >
                  Зелёный чай
                </a>
                <a
                  href="#black"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#6B8E23] transition-colors"
                >
                  Чёрный чай
                </a>
                <a
                  href="#oolong"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#6B8E23] transition-colors"
                >
                  Улун
                </a>
                <a
                  href="#puer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#6B8E23] transition-colors"
                >
                  Пуэр
                </a>
              </div>
            </HoverDropdown>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-[#6B8E23] transition-colors font-open-sans"
            >
              Польза
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-[#6B8E23] transition-colors font-open-sans"
            >
              О нас
            </a>
          </nav>
          <Button className="bg-[#6B8E23] hover:bg-[#556B2F]">
            <Icon name="HeartHandshake" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-[#8B4513]">
                Откройте для себя мир изысканного чая
              </h1>
              <p className="text-lg md:text-xl mb-8 font-open-sans text-gray-700">
                Погрузитесь в многовековую культуру чаепития, узнайте о
                разнообразии сортов и насладитесь неповторимым вкусом и ароматом
                настоящего чая.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                  <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                  Узнать больше
                </Button>
                <Button
                  variant="outline"
                  className="border-[#6B8E23] text-[#6B8E23] hover:bg-[#6B8E23]/10"
                >
                  <Icon name="Leaf" className="mr-2 h-4 w-4" />
                  Виды чая
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Tea */}
        <section id="types" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-montserrat text-[#8B4513]">
                Популярные виды чая
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-open-sans">
                Чай – один из самых популярных напитков в мире. Существует
                множество его видов, каждый со своим уникальным вкусом и
                свойствами.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Зелёный чай",
                  description:
                    "Не подвергается ферментации, сохраняет природные антиоксиданты и считается одним из самых полезных.",
                  image:
                    "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1000",
                  icon: "Sprout",
                },
                {
                  title: "Чёрный чай",
                  description:
                    "Полностью ферментированный чай с насыщенным вкусом и тонизирующим эффектом.",
                  image:
                    "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1000",
                  icon: "Droplets",
                },
                {
                  title: "Улун (Оолонг)",
                  description:
                    "Частично ферментированный чай, сочетающий свойства зеленого и черного чая.",
                  image:
                    "https://images.unsplash.com/photo-1597481887439-65c68456f389?q=80&w=1000",
                  icon: "CloudSun",
                },
                {
                  title: "Белый чай",
                  description:
                    "Минимально обработанный чай из молодых почек и листьев с нежным вкусом.",
                  image:
                    "https://images.unsplash.com/photo-1574181609555-c5395cb7e656?q=80&w=1000",
                  icon: "Sunrise",
                },
                {
                  title: "Пуэр",
                  description:
                    "Постферментированный чай с землистым вкусом, который улучшается со временем.",
                  image:
                    "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1000",
                  icon: "Mountain",
                },
                {
                  title: "Травяной чай",
                  description:
                    "Напитки из трав, фруктов и специй, часто не содержат кофеина.",
                  image:
                    "https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?q=80&w=1000",
                  icon: "Flower2",
                },
              ].map((tea, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={tea.image}
                      alt={tea.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#8B4513] font-montserrat">
                      <Icon
                        name={tea.icon}
                        className="h-5 w-5 text-[#6B8E23]"
                      />
                      {tea.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 font-open-sans">
                      {tea.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="text-[#6B8E23] hover:text-[#556B2F] hover:bg-[#F5F5DC]/50"
                    >
                      Подробнее
                      <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-[#F5F5DC]/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1523920290228-4f321a939b02?q=80&w=1200"
                  alt="Чаепитие"
                  className="rounded-lg shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 font-montserrat text-[#8B4513]">
                  Польза чая для здоровья
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Богат антиоксидантами",
                      description:
                        "Чай содержит полифенолы, которые помогают защитить клетки от повреждений.",
                      icon: "Shield",
                    },
                    {
                      title: "Улучшает работу мозга",
                      description:
                        "Кофеин и L-теанин в чае способствуют концентрации внимания и снижают стресс.",
                      icon: "Brain",
                    },
                    {
                      title: "Поддерживает здоровье сердца",
                      description:
                        "Регулярное употребление чая связано со снижением риска сердечно-сосудистых заболеваний.",
                      icon: "Heart",
                    },
                    {
                      title: "Помогает контролировать вес",
                      description:
                        "Некоторые сорта чая могут ускорять метаболизм и способствовать сжиганию жиров.",
                      icon: "ActivitySquare",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-[#6B8E23]/20 flex items-center justify-center">
                          <Icon
                            name={benefit.icon}
                            className="h-5 w-5 text-[#6B8E23]"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 font-montserrat text-[#8B4513]">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 font-open-sans">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-montserrat text-[#8B4513] flex items-center justify-center gap-3">
              <Icon name="Mail" size={32} />
              История чая
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 font-open-sans">
              Согласно легенде, чай был открыт китайским императором Шеннонгом в
              2737 году до н.э., когда листья чайного дерева случайно упали в
              его кипящую воду. С тех пор чай стал неотъемлемой частью культуры
              многих народов мира и сегодня является одним из самых популярных
              напитков на планете.
            </p>
            <div className="flex justify-center">
              <Button className="bg-pink-500 hover:bg-pink-600 rounded-full">
                <Icon name="Mail" className="mr-2 h-4 w-4" />
                Узнать больше об истории чая
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#8B4513]/90 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat flex items-center">
                <Icon name="Coffee" className="mr-2 h-5 w-5" />
                Чайный мир
              </h3>
              <p className="text-gray-200 font-open-sans">
                Мы делимся знаниями о лучших сортах чая, традициях чаепития и
                пользе этого древнего напитка.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">
                Разделы
              </h3>
              <ul className="space-y-2 font-open-sans">
                <li>
                  <a
                    href="#types"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Виды чая
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Польза чая
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    История
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">
                Контакты
              </h3>
              <ul className="space-y-2 font-open-sans">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@teaworld.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (123) 456-78-90</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>Москва, ул. Чайная, 15</span>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-white/20" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm font-open-sans">
              © 2025 Чайный мир. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white hover:text-[#F5F5DC] transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F5F5DC] transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F5F5DC] transition-colors"
              >
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F5F5DC] transition-colors"
              >
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
