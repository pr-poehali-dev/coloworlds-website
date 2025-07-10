import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const servers = [
    {
      name: "Survival Classic",
      description: "Классическое выживание с экономикой",
      players: "245/300",
      status: "online",
      features: ["Кланы", "PvP", "Экономика", "Защиты"],
    },
    {
      name: "Survival Hardcore",
      description: "Хардкорное выживание для профи",
      players: "89/150",
      status: "online",
      features: ["Hardcore", "PvP", "Рейды", "Кланы"],
    },
    {
      name: "Survival Creative",
      description: "Смешанный режим с творчеством",
      players: "156/200",
      status: "online",
      features: ["Креатив", "Выживание", "Кланы", "События"],
    },
  ];

  const features = [
    {
      icon: "Users",
      title: "Кланы",
      description: "Создавайте альянсы и завоевывайте галактики вместе",
    },
    {
      icon: "Swords",
      title: "PvP Сражения",
      description: "Эпичные битвы между планетами и звездными системами",
    },
    {
      icon: "Coins",
      title: "Экономика",
      description: "Торгуйте ресурсами и развивайте космическую империю",
    },
    {
      icon: "Shield",
      title: "Защиты",
      description: "Создавайте неприступные космические базы",
    },
  ];

  return (
    <div className="min-h-screen cosmic-bg relative overflow-hidden">
      {/* Animated stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Icon name="Rocket" size={32} className="text-primary" />
            <h1 className="text-2xl font-orbitron font-bold text-glow">
              ColoWorlds
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Button variant="ghost" className="text-white hover:text-primary">
              Главная
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary">
              Сервера
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary">
              Донат
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary">
              Правила
            </Button>
          </div>
          <Button className="glow">
            <Icon name="Users" size={16} className="mr-2" />
            Войти
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="floating mb-8">
            <img
              src="/img/ec25d257-7364-439c-8264-f2c8fff4ecfe.jpg"
              alt="Космическая Земля"
              className="w-48 h-48 mx-auto rounded-full border-4 border-primary/50 shadow-2xl"
            />
          </div>

          <h2 className="text-6xl font-orbitron font-bold mb-6 text-glow">
            COLOWORLDS
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Добро пожаловать в межпланетное приключение! Исследуйте космические
            миры, создавайте могущественные кланы и сражайтесь за контроль над
            галактикой.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="glow text-lg px-8 py-4">
              <Icon name="Play" size={20} className="mr-2" />
              Начать игру
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-primary/50"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать лаунчер
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-primary">
                490+
              </div>
              <div className="text-gray-300">Игроков онлайн</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-accent">
                45+
              </div>
              <div className="text-gray-300">Активных кланов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-secondary">
                3
              </div>
              <div className="text-gray-300">Игровых режима</div>
            </div>
          </div>
        </div>
      </section>

      {/* Servers Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">
            Игровые Серверы
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servers.map((server, index) => (
              <Card
                key={index}
                className="floating-delayed bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-orbitron text-xl">
                      {server.name}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="text-green-400 border-green-400"
                    >
                      <Icon
                        name="Circle"
                        size={8}
                        className="mr-1 fill-green-400"
                      />
                      {server.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {server.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-300">
                      Игроки онлайн:
                    </span>
                    <span className="font-mono text-primary font-bold">
                      {server.players}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {server.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full glow">
                    <Icon name="Rocket" size={16} className="mr-2" />
                    Подключиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">
            Особенности Сервера
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon
                      name={feature.icon}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <CardTitle className="font-orbitron text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Rocket" size={24} className="text-primary" />
                <h4 className="font-orbitron font-bold text-xl">ColoWorlds</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Межпланетные приключения в мире Minecraft
              </p>
            </div>

            <div>
              <h5 className="font-orbitron font-semibold mb-4">Игра</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Серверы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Статистика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Карта
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Рейтинги
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-orbitron font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Правила
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Форум
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Донат
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-orbitron font-semibold mb-4">Связь</h5>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/50"
                >
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/50"
                >
                  <Icon name="Users" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/50"
                >
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-gray-300 text-sm">
            <p>
              &copy; 2024 ColoWorlds. Все права защищены. Исследуйте галактику!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
