/**
 * @file menu.js
 * @description Contains all data and functions related to menu and bar items for the Mokkos restaurant website.
 */

// Object containing all translations for the website in Russian, English, and Kazakh.
const translations = {
    ru: {
        site_title: "Mokkos - Европейская и азиатская кухня",
        nav_menu: "Меню", nav_bar: "Бар", nav_interior: "Интерьер", nav_contacts: "Контакты", nav_my_orders: "Мои заказы",
        nav_delivery: "Доставка", nav_reservation: "Бронирование", nav_my_orders_footer: "Мои заказы",
        btn_login: "Войти", btn_logout: "Выйти", btn_reserve_table: "Забронировать столик",
        hero_title: "Европейская и Азиатская кухня",
        hero_subtitle: "Уникальные блюда из натуральных продуктов, приготовленные с любовью и мастерством",
        btn_view_menu: "Смотреть меню", btn_ai_assistant: "Попробовать AI-Помощника",
        title_our_menu: "Наше Меню",
        cat_all: "Все блюда", cat_breakfast: "Завтраки", cat_appetizers: "Закуски", cat_salads: "Салаты", cat_soups: "Супы", cat_pasta: "Пасты",
        cat_fish: "Рыба и морепродукты", cat_poultry: "Птица", cat_meat: "Мясо", cat_sharing: "На компанию", cat_pizza: "Пицца", cat_sides: "Гарниры", cat_bread: "Хлеб", cat_desserts: "Десерты",
        btn_add_to_cart: "В корзину", btn_details: "Подробнее",
        title_bar_menu: "Барная карта",
        title_gallery: "Интерьер ресторана", gallery_main_hall: "Главный зал", gallery_vip_hall: "Вип-зал", gallery_coffee_shop: "Кофейня", gallery_bakery: "Пекарня",
        title_payment: "Способы Оплаты",
        payment_online_title: "Онлайн оплата", payment_online_desc: "Оплатите заказ картой через наш безопасный платежный шлюз. Принимаем Visa, Mastercard и другие карты.",
        payment_cash_title: "Наличными", payment_cash_desc: "Оплатите заказ наличными при получении курьеру или в нашем ресторане.",
        payment_qr_title: "Kaspi QR", payment_qr_desc: "Оплатите заказ через Kaspi.kz с помощью QR-кода. Быстро и удобно!",
        cart_title: "Ваш заказ", cart_total: "Итого:", btn_checkout: "Оформить заказ",
        dish_details_title: "Подробнее о блюде", dish_ingredients_title: "Состав:",
        login_title: "Вход в систему", login_email_label: "Email", login_email_placeholder: "Введите ваш email",
        login_password_label: "Пароль", login_password_placeholder: "Введите пароль",
        btn_login_modal: "Войти", login_no_account: "Нет аккаунта?", login_register_link: "Зарегистрироваться",
        footer_contacts_title: "Контакты", footer_nav_title: "Навигация", footer_conditions_title: "Условия",
        footer_conditions_list: `<li>Штраф за принесенный алкоголь: 100,000 ₸</li><li>Продление времени: 20,000 ₸</li><li>Обслуживание: 10%</li>`,
        footer_copyright: "&copy; 2025 Ресторан Mokkos. Все права защищены.",
        alert_login_error: "Ошибка входа:", alert_reg_success: "Регистрация прошла успешно!", alert_reg_error: "Ошибка регистрации:",
        alert_cart_empty: "Ваша корзина пуста", alert_reg_prompt: "Пожалуйста, введите email и пароль для регистрации.",
        alert_balance_prompt: "Для пополнения баланса необходимо войти в систему", cart_empty_message: "Ваша корзина пуста",
        lang_choose: "Выберите язык",
        bar_cat_cocktails: "КОКТЕЙЛИ", bar_cat_non_alcoholic: "БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ", bar_cat_shots: "ШОТЫ", bar_cat_lemonade: "ЛИМОНАДЫ", bar_cat_tea: "ЧАЙ И ДОБАВКИ", bar_cat_non_alc_wine: "БЕЗАЛКОГОЛЬНОЕ ВИНО И ПИВО", bar_cat_drinks: "НАПИТКИ И ВОДА", bar_cat_liqueurs: "ЛИКЕРЫ", bar_cat_whiskey: "ВИСКИ", bar_cat_gin: "ДЖИН", bar_cat_rum: "РОМ", bar_cat_vodka: "ВОДКА", bar_cat_tequila: "ТЕКИЛА"
    },
    en: {
        site_title: "Mokkos - European and Asian Cuisine",
        nav_menu: "Menu", nav_bar: "Bar", nav_interior: "Interior", nav_contacts: "Contacts", nav_my_orders: "My Orders",
        nav_delivery: "Delivery", nav_reservation: "Reservation", nav_my_orders_footer: "My Orders",
        btn_login: "Login", btn_logout: "Logout", btn_reserve_table: "Reserve a Table",
        hero_title: "European and Asian Cuisine",
        hero_subtitle: "Unique dishes from natural products, cooked with love and skill",
        btn_view_menu: "View Menu", btn_ai_assistant: "Try AI Assistant",
        title_our_menu: "Our Menu",
        cat_all: "All Dishes", cat_breakfast: "Breakfast", cat_appetizers: "Appetizers", cat_salads: "Salads", cat_soups: "Soups", cat_pasta: "Pasta",
        cat_fish: "Fish and Seafood", cat_poultry: "Poultry", cat_meat: "Meat", cat_sharing: "For Sharing", cat_pizza: "Pizza", cat_sides: "Side Dishes", cat_bread: "Bread", cat_desserts: "Desserts",
        btn_add_to_cart: "Add to Cart", btn_details: "Details",
        title_bar_menu: "Bar Menu",
        title_gallery: "Restaurant Interior", gallery_main_hall: "Main Hall", gallery_vip_hall: "VIP Hall", gallery_coffee_shop: "Coffee Shop", gallery_bakery: "Bakery",
        title_payment: "Payment Methods",
        payment_online_title: "Online Payment", payment_online_desc: "Pay for your order by card through our secure payment gateway. We accept Visa, Mastercard, and other cards.",
        payment_cash_title: "Cash", payment_cash_desc: "Pay for your order in cash to the courier upon delivery or at our restaurant.",
        payment_qr_title: "Kaspi QR", payment_qr_desc: "Pay for your order via Kaspi.kz using a QR code. Fast and convenient!",
        cart_title: "Your Order", cart_total: "Total:", btn_checkout: "Checkout",
        dish_details_title: "Dish Details", dish_ingredients_title: "Ingredients:",
        login_title: "Login", login_email_label: "Email", login_email_placeholder: "Enter your email",
        login_password_label: "Password", login_password_placeholder: "Enter your password",
        btn_login_modal: "Login", login_no_account: "No account?", login_register_link: "Register",
        footer_contacts_title: "Contacts", footer_nav_title: "Navigation", footer_conditions_title: "Terms",
        footer_conditions_list: `<li>Fine for bringing your own alcohol: 100,000 ₸</li><li>Time extension: 20,000 ₸</li><li>Service charge: 10%</li>`,
        footer_copyright: "&copy; 2025 Mokkos Restaurant. All rights reserved.",
        alert_login_error: "Login error:", alert_reg_success: "Registration successful!", alert_reg_error: "Registration error:",
        alert_cart_empty: "Your cart is empty", alert_reg_prompt: "Please enter email and password to register.",
        alert_balance_prompt: "You need to log in to top up your balance", cart_empty_message: "Your cart is empty",
        lang_choose: "Choose language",
        bar_cat_cocktails: "COCKTAILS", bar_cat_non_alcoholic: "NON-ALCOHOLIC COCKTAILS", bar_cat_shots: "SHOTS", bar_cat_lemonade: "LEMONADE", bar_cat_tea: "TEA & ADD-ONS", bar_cat_non_alc_wine: "NON-ALCOHOLIC WINE & BEER", bar_cat_drinks: "DRINKS & WATER", bar_cat_liqueurs: "LIQUEURS", bar_cat_whiskey: "WHISKEY", bar_cat_gin: "GIN", bar_cat_rum: "RUM", bar_cat_vodka: "VODKA", bar_cat_tequila: "TEQUILA"
    },
    kk: {
        site_title: "Mokkos - Еуропалық және азиялық асхана",
        nav_menu: "Мәзір", nav_bar: "Бар", nav_interior: "Интерьер", nav_contacts: "Байланыс", nav_my_orders: "Менің тапсырыстарым",
        nav_delivery: "Жеткізу", nav_reservation: "Брондау", nav_my_orders_footer: "Менің тапсырыстарым",
        btn_login: "Кіру", btn_logout: "Шығу", btn_reserve_table: "Үстел брондау",
        hero_title: "Еуропалық және Азиялық асхана",
        hero_subtitle: "Сүйіспеншілікпен және шеберлікпен дайындалған табиғи өнімдерден жасалған бірегей тағамдар",
        btn_view_menu: "Мәзірді көру", btn_ai_assistant: "AI-Көмекшіні байқап көріңіз",
        title_our_menu: "Біздің Мәзір",
        cat_all: "Барлық тағамдар", cat_breakfast: "Таңғы ас", cat_appetizers: "Тіскебасарлар", cat_salads: "Салаттар", cat_soups: "Сорпалар", cat_pasta: "Пасталар",
        cat_fish: "Балық және теңіз өнімдері", cat_poultry: "Құс еті", cat_meat: "Ет", cat_sharing: "Компанияға", cat_pizza: "Пицца", cat_sides: "Гарнирлер", cat_bread: "Нан", cat_desserts: "Десерттер",
        btn_add_to_cart: "Себетке салу", btn_details: "Толығырақ",
        title_bar_menu: "Бар картасы",
        title_gallery: "Мейрамхана интерьері", gallery_main_hall: "Басты зал", gallery_vip_hall: "VIP-зал", gallery_coffee_shop: "Кофехана", gallery_bakery: "Наубайхана",
        title_payment: "Төлем әдістері",
        payment_online_title: "Онлайн төлем", payment_online_desc: "Тапсырысты біздің қауіпсіз төлем шлюзі арқылы картамен төлеңіз. Visa, Mastercard және басқа карталарды қабылдаймыз.",
        payment_cash_title: "Қолма-қол ақшамен", payment_cash_desc: "Тапсырысты курьерге жеткізілгенде немесе біздің мейрамханада қолма-қол ақшамен төлеңіз.",
        payment_qr_title: "Kaspi QR", payment_qr_desc: "Тапсырысты Kaspi.kz арқылы QR-кодпен төлеңіз. Жылдам әрі ыңғайлы!",
        cart_title: "Сіздің тапсырысыңыз", cart_total: "Барлығы:", btn_checkout: "Тапсырысты рәсімдеу",
        dish_details_title: "Тағам туралы толығырақ", dish_ingredients_title: "Құрамы:",
        login_title: "Жүйеге кіру", login_email_label: "Email", login_email_placeholder: "Email-ыңызды енгізіңіз",
        login_password_label: "Құпия сөз", login_password_placeholder: "Құпия сөзді енгізіңіз",
        btn_login_modal: "Кіру", login_no_account: "Аккаунтыңыз жоқ па?", login_register_link: "Тіркелу",
        footer_contacts_title: "Байланыс", footer_nav_title: "Навигация", footer_conditions_title: "Шарттар",
        footer_conditions_list: `<li>Өз алкоголімен келуге айыппұл: 100,000 ₸</li><li>Уақытты ұзарту: 20,000 ₸</li><li>Қызмет көрсету: 10%</li>`,
        footer_copyright: "&copy; 2025 Mokkos Мейрамханасы. Барлық құқықтар қорғалған.",
        alert_login_error: "Кіру қатесі:", alert_reg_success: "Тіркелу сәтті аяқталды!", alert_reg_error: "Тіркелу қатесі:",
        alert_cart_empty: "Сіздің себетіңіз бос", alert_reg_prompt: "Тіркелу үшін email және құпия сөзді енгізіңіз.",
        alert_balance_prompt: "Балансты толтыру үшін жүйеге кіру қажет", cart_empty_message: "Сіздің себетіңіз бос",
        lang_choose: "Тілді таңдаңыз",
        bar_cat_cocktails: "КОКТЕЙЛЬДЕР", bar_cat_non_alcoholic: "АЛКОГОЛЬСІЗ КОКТЕЙЛЬДЕР", bar_cat_shots: "ШОТТАР", bar_cat_lemonade: "ЛИМОНАДТАР", bar_cat_tea: "ШАЙ ЖӘНЕ ҚОСПАЛАР", bar_cat_non_alc_wine: "АЛКОГОЛЬСІЗ ШАРАП ЖӘНЕ СЫРА", bar_cat_drinks: "СУСЫНДАР МЕН СУ", bar_cat_liqueurs: "ЛИКЕРЛЕР", bar_cat_whiskey: "ВИСКИ", bar_cat_gin: "ДЖИН", bar_cat_rum: "РОМ", bar_cat_vodka: "АРАҚ", bar_cat_tequila: "ТЕКИЛА"
    },
    menu_items: {
        "1": { ru: { title: "Фирменный завтрак с лососем", desc: "Лосось, яйцо пашот, тосты, свежие овощи" }, en: { title: "Signature Breakfast with Salmon", desc: "Salmon, poached egg, toasts, fresh vegetables" }, kk: { title: "Асыл балық қосылған фирмалық таңғы ас", desc: "Асыл балық, пашот жұмыртқасы, тосттар, жаңа піскен көкөністер" } },
        "2": { ru: { title: "Фирменный завтрак с курицей", desc: "Куриная грудка, яйца, тосты, овощи" }, en: { title: "Signature Breakfast with Chicken", desc: "Chicken breast, eggs, toasts, vegetables" }, kk: { title: "Тауық еті қосылған фирмалық таңғы ас", desc: "Тауық төс еті, жұмыртқа, тосттар, көкөністер" } },
        "3": { ru: { title: "Яйцо бенедикт с голландским соусом", desc: "Яйцо пашот, пастрами из индейки, голландский соус" }, en: { title: "Eggs Benedict with Hollandaise Sauce", desc: "Poached egg, turkey pastrami, hollandaise sauce" }, kk: { title: "Голланд соусымен бенедикт жұмыртқасы", desc: "Пашот жұмыртқасы, күркетауық пастрамиі, голланд соусы" } },
        "4": { ru: { title: "Зеленый омлет с фетой", desc: "Омлет со свежей зеленью и фетой" }, en: { title: "Green Omelette with Feta", desc: "Omelette with fresh herbs and feta cheese" }, kk: { title: "Фета қосылған жасыл омлет", desc: "Жаңа шөптер мен фета қосылған омлет" } },
        "5": { ru: { title: "Сетный завтрак", desc: "Ассорти из яиц, мяса, овощей и хлеба на двоих" }, en: { title: "Set Breakfast", desc: "Assortment of eggs, meat, vegetables, and bread for two" }, kk: { title: "Сет таңғы ас", desc: "Екі адамға арналған жұмыртқа, ет, көкөністер мен нан ассортиі" } },
        "6": { ru: { title: "Сырники с греческим йогуртом и тертой малиной", desc: "Домашние сырники с малиной и йогуртом" }, en: { title: "Syrniki with Greek Yogurt and Grated Raspberry", desc: "Homemade syrniki with raspberry and yogurt" }, kk: { title: "Грек йогурты мен үгітілген таңқурай қосылған ірімшіктер", desc: "Таңқурай мен йогурт қосылған үй ірімшіктері" } },
        "7": { ru: { title: "Баклажан пармиджано", desc: "Запеченные баклажаны с сыром и томатным соусом" }, en: { title: "Eggplant Parijana", desc: "Baked eggplant with cheese and tomato sauce" }, kk: { title: "Паринджана баялдыжаны", desc: "Ірімшік пен қызанақ соусы қосылған пісірілген баялдыжан" } },
        "8": { ru: { title: "Паштет из печени цыпленка с маринованным инжиром", desc: "Нежный паштет с маринованным инжиром" }, en: { title: "Chicken Liver Pâté with Marinated Figs", desc: "Delicate pâté with marinated figs" }, kk: { title: "Маринадталған інжір қосылған балапан бауырынан жасалған паштет", desc: "Маринадталған інжір қосылған нәзік паштет" } },
        "9": { ru: { title: "Тако с томлеными щечками и пряной сальсой", desc: "Тако с нежной говяжьей щекой и сальсой" }, en: { title: "Tacos with Stewed Cheeks and Spicy Salsa", desc: "Tacos with tender beef cheek and salsa" }, kk: { title: "Бұқтырылған ұрт пен ащы сальса қосылған тако", desc: "Нәзік сиыр ұрты мен сальса қосылған тако" } },
        "10": { ru: { title: "Боул с курицей", desc: "Чаша с курицей, рисом и овощами" }, en: { title: "Bowl with Chicken", desc: "Bowl with chicken, rice, and vegetables" }, kk: { title: "Тауық еті қосылған боул", desc: "Тауық еті, күріш пен көкөністер қосылған кесе" } },
        "11": { ru: { title: "Боул с лососем", desc: "Чаша с лососем, рисом и овощами" }, en: { title: "Bowl with Salmon", desc: "Bowl with salmon, rice, and vegetables" }, kk: { title: "Асыл балық қосылған боул", desc: "Асыл балық, күріш пен көкөністер қосылған кесе" } },
        "12": { ru: { title: "Креветки саганаки", desc: "Креветки в пикантном соусе" }, en: { title: "Saganaki Shrimps", desc: "Shrimps in a savory sauce" }, kk: { title: "Саганаки асшаяндары", desc: "Ащы тұздықтағы асшаяндар" } },
        "13": { ru: { title: "Язык на гриле", desc: "Нежный говяжий язык с гарниром" }, en: { title: "Grilled Tongue", desc: "Tender beef tongue with a side dish" }, kk: { title: "Грильде пісірілген тіл", desc: "Гарнирмен берілетін нәзік сиыр тілі" } },
        "14": { ru: { title: "Сет меззе", desc: "Ассорти средиземноморских закусок" }, en: { title: "Mezze Set", desc: "Assortment of Mediterranean appetizers" }, kk: { title: "Меззе жиынтығы", desc: "Жерорта теңізі тіскебасарларының ассортиі" } },
        "15": { ru: { title: "Мозговая кость с зеленой аджикой", desc: "Запеченная кость с пикантной аджикой" }, en: { title: "Marrow Bone with Green Adjika", desc: "Baked bone with spicy adjika" }, kk: { title: "Жасыл аджика қосылған жұлын сүйегі", desc: "Ащы аджикамен пісірілген сүйек" } },
        "16": { ru: { title: "Бараньи семечки", desc: "Маленькие бараньи ребрышки в соусе" }, en: { title: "Lamb 'Seeds'", desc: "Small lamb ribs in sauce" }, kk: { title: "Қозы 'шемішкелері'", desc: "Тұздықтағы кішкентай қозы қабырғалары" } },
        "17": { ru: { title: "Салат из свежих овощей с домашней сметаной и укропом", desc: "Свежие овощи с домашней сметаной" }, en: { title: "Fresh Vegetable Salad with Homemade Sour Cream and Dill", desc: "Fresh vegetables with homemade sour cream" }, kk: { title: "Үй қаймағы мен аскөк қосылған жаңа көкөніс салаты", desc: "Үй қаймағы қосылған жаңа көкөністер" } },
        "18": { ru: { title: "Зеленый салат с фетой и авокадо", desc: "Салат с фетой, авокадо и зеленью" }, en: { title: "Green Salad with Feta and Avocado", desc: "Salad with feta, avocado, and greens" }, kk: { title: "Фета мен авокадо қосылған жасыл салат", desc: "Фета, авокадо және көк шөп қосылған салат" } },
        "19": { ru: { title: "Рукола с томатами и пармезаном", desc: "Рукола с черри и пармезаном" }, en: { title: "Arugula with Tomatoes and Parmesan", desc: "Arugula with cherry tomatoes and parmesan" }, kk: { title: "Қызанақ пен пармезан қосылған рукола", desc: "Черри қызанағы мен пармезан қосылған рукола" } },
        "20": { ru: { title: "Панцанела с креветками", desc: "Итальянский хлебный салат с креветками" }, en: { title: "Panzanella with Shrimps", desc: "Italian bread salad with shrimps" }, kk: { title: "Асшаяндармен панцанелла", desc: "Асшаяндар қосылған итальяндық нан салаты" } },
        "21": { ru: { title: "Броколи с горгонзолой, цыпленком и финиковой заправкой", desc: "Салат с горгонзолой и курицей" }, en: { title: "Brajali with Gorgonzola, Chicken, and Date Dressing", desc: "Salad with gorgonzola and chicken" }, kk: { title: "Горгонзола, балапан және құрма тұздығымен бражали", desc: "Горгонзола мен тауық еті қосылған салат" } },
        "22": { ru: { title: "Свекла с греческим йогуртом, фундуком и инжиром", desc: "Запеченная свекла с йогуртом и орехами" }, en: { title: "Beetroot with Greek Yogurt, Hazelnuts, and Figs", desc: "Baked beetroot with yogurt and nuts" }, kk: { title: "Грек йогурты, фундук және інжірмен қызылша", desc: "Йогурт пен жаңғақтар қосылған пісірілген қызылша" } },
        "23": { ru: { title: "Салат с авокадо, шампиньонами, эдамаме и ореховой заправкой", desc: "Салат с авокадо, грибами и эдамаме" }, en: { title: "Salad with Avocado, Mushrooms, Edamame, and Nut Dressing", desc: "Salad with avocado, mushrooms, and edamame" }, kk: { title: "Авокадо, шампиньон, эдамаме және жаңғақ тұздығымен салат", desc: "Авокадо, саңырауқұлақ және эдамаме қосылған салат" } },
        "24": { ru: { title: "Том ям с креветками", desc: "Острый тайский суп с креветками" }, en: { title: "Tom Yum with Shrimps", desc: "Spicy Thai soup with shrimps" }, kk: { title: "Асшаяндармен том ям", desc: "Асшаяндар қосылған ащы тай сорпасы" } },
        "25": { ru: { title: "Окрошка с лососем", desc: "Традиционная окрошка с лососем" }, en: { title: "Okroshka with Salmon", desc: "Traditional okroshka with salmon" }, kk: { title: "Асыл балықпен окрошка", desc: "Асыл балық қосылған дәстүрлі окрошка" } },
        "26": { ru: { title: "Окрошка с ветчиной", desc: "Классическая окрошка с ветчиной" }, en: { title: "Okroshka with Ham", desc: "Classic okroshka with ham" }, kk: { title: "Ветчинамен окрошка", desc: "Ветчина қосылған классикалық окрошка" } },
        "27": { ru: { title: "Куриный бульон с яйцом", desc: "Ароматный куриный бульон с яйцом" }, en: { title: "Chicken Broth with Egg", desc: "Aromatic chicken broth with an egg" }, kk: { title: "Жұмыртқа қосылған тауық сорпасы", desc: "Жұмыртқа қосылған хош иісті тауық сорпасы" } },
        "28": { ru: { title: "Зеленый суп из молодого горошка с пастрами", desc: "Нежный суп из горошка с пастрами" }, en: { title: "Green Pea Soup with Pastrami", desc: "Delicate pea soup with pastrami" }, kk: { title: "Пастрами қосылған жас бұршақтан жасалған жасыл сорпа", desc: "Пастрами қосылған нәзік бұршақ сорпасы" } },
        "29": { ru: { title: "Чорба с бараниной и домашней сметаной", desc: "Насыщенный суп с бараниной" }, en: { title: "Chorba with Lamb and Homemade Sour Cream", desc: "Rich soup with lamb" }, kk: { title: "Қой еті мен үй қаймағы қосылған чорба", desc: "Қой еті қосылған қанық сорпа" } },
        "30": { ru: { title: "Домашняя паста с морепродуктами", desc: "Паста с миксом морепродуктов" }, en: { title: "Homemade Pasta with Seafood", desc: "Pasta with a mix of seafood" }, kk: { title: "Теңіз өнімдерімен үй пастасы", desc: "Теңіз өнімдері қоспасымен паста" } },
        "31": { ru: { title: "Фетучини с курицей и грибами", desc: "Паста с курицей и шампиньонами" }, en: { title: "Fettuccine with Chicken and Mushrooms", desc: "Pasta with chicken and mushrooms" }, kk: { title: "Тауық еті мен саңырауқұлақтармен фетучини", desc: "Тауық еті мен шампиньондар қосылған паста" } },
        "32": { ru: { title: "Ньокки с томатным ягненком, шпинатом и печенным перцем", desc: "Ньокки с ягненком и овощами" }, en: { title: "Gnocchi with Tomato Lamb, Spinach, and Baked Pepper", desc: "Gnocchi with lamb and vegetables" }, kk: { title: "Томатты қозы, шпинат және пісірілген бұрышпен ньокки", desc: "Қозы мен көкөністер қосылған ньокки" } },
        "33": { ru: { title: "Фреш паста с телятиной и домашним лечо", desc: "Свежая паста с телятиной и лечо" }, en: { title: "Fresh Pasta with Veal and Homemade Lecho", desc: "Fresh pasta with veal and lecho" }, kk: { title: "Бұзау еті мен үй лечосымен фреш паста", desc: "Бұзау еті мен лечо қосылған жаңа паста" } },
        "34": { ru: { title: "Запеченный лосось со шпинатом и соусом воде", desc: "Лосось со шпинатом и соусом" }, en: { title: "Baked Salmon with Spinach and Vode Sauce", desc: "Salmon with spinach and sauce" }, kk: { title: "Шпинат және воде соусымен пісірілген асыл балық", desc: "Шпинат пен соус қосылған асыл балық" } },
        "35": { ru: { title: "Сибас на гриле с соусом из печеных перцев", desc: "Сибас с соусом из перцев" }, en: { title: "Grilled Sea Bass with Baked Pepper Sauce", desc: "Sea bass with pepper sauce" }, kk: { title: "Пісірілген бұрыш соусымен грильдегі сибас", desc: "Бұрыш соусы қосылған сибас" } },
        "36": { ru: { title: "Соте из морепродуктов", desc: "Микс морепродуктов в соусе" }, en: { title: "Seafood Sauté", desc: "Mix of seafood in a sauce" }, kk: { title: "Теңіз өнімдерінен жасалған соте", desc: "Тұздықтағы теңіз өнімдерінің қоспасы" } },
        "37": { ru: { title: "Осьминог с соусом ромеско и картофельными чипсами", desc: "Нежный осьминог с чипсами" }, en: { title: "Octopus with Romesco Sauce and Potato Chips", desc: "Tender octopus with chips" }, kk: { title: "Ромеско соусымен және картоп чипсымен сегізаяқ", desc: "Чипсы қосылған нәзік сегізаяқ" } },
        "38": { ru: { title: "Шницель из куриного бедра с салатом из айсберга и пармезаном", desc: "Куриный шницель с салатом" }, en: { title: "Chicken Thigh Schnitzel with Iceberg Salad and Parmesan", desc: "Chicken schnitzel with salad" }, kk: { title: "Айсберг салаты мен пармезан қосылған тауық санынан жасалған шницель", desc: "Салатпен берілетін тауық шницелі" } },
        "39": { ru: { title: "Половина цыпленка с соленьями и питой", desc: "Цыпленок с соленьями и питой" }, en: { title: "Half Chicken with Pickles and Pita", desc: "Chicken with pickles and pita" }, kk: { title: "Тұздалған қияр мен пита қосылған жарты балапан", desc: "Тұздалған қияр мен пита қосылған балапан" } },
        "40": { ru: { title: "Цыпленок с миндальным пюре и шпинатом", desc: "Цыпленок с миндальным пюре" }, en: { title: "Chicken with Almond Purée and Spinach", desc: "Chicken with almond purée" }, kk: { title: "Бадам езбесі мен шпинат қосылған балапан", desc: "Бадам езбесі қосылған балапан" } },
        "41": { ru: { title: "Утиная ножка конфи с картофельным пюре и виноградным соусом", desc: "Утиная ножка конфи с пюре" }, en: { title: "Duck Leg Confit with Mashed Potatoes and Grape Sauce", desc: "Duck leg confit with purée" }, kk: { title: "Картоп езбесі мен жүзім соусы қосылған үйрек аяғы конфиі", desc: "Езбемен берілетін үйрек аяғы конфиі" } },
        "42": { ru: { title: "Сувлаки из цыпленка с томатами и гранатовым соусом", desc: "Шашлычки из цыпленка" }, en: { title: "Chicken Souvlaki with Tomatoes and Pomegranate Sauce", desc: "Chicken skewers" }, kk: { title: "Қызанақ пен анар соусы қосылған балапан сувлакиі", desc: "Балапан етінен жасалған кәуап" } },
        "43": { ru: { title: "Телячьи щечки с трюфельным пюре, шампиньонами и соусом демигляс", desc: "Томленные щечки с трюфелем" }, en: { title: "Veal Cheeks with Truffle Purée, Mushrooms, and Demi-glace Sauce", desc: "Stewed cheeks with truffle" }, kk: { title: "Трюфель езбесі, шампиньондар және демигляс соусымен бұзау ұрты", desc: "Трюфельмен бұқтырылған ұрт" } },
        "44": { ru: { title: "Каре барашка с айваром и греческим йогуртом", desc: "Каре барашка с овощным айваром" }, en: { title: "Lamb Rack with Ajvar and Greek Yogurt", desc: "Lamb rack with vegetable ajvar" }, kk: { title: "Айвар мен грек йогурты қосылған қозының каресі", desc: "Көкөніс айварымен қозының каресі" } },
        "45": { ru: { title: "Томленный ягненок с мятым картофелем и соусом ромеско", desc: "Ягненок с картофелем" }, en: { title: "Stewed Lamb with Smashed Potatoes and Romesco Sauce", desc: "Lamb with potatoes" }, kk: { title: "Мыжытылған картоп пен ромеско соусымен бұқтырылған қозы", desc: "Картоппен берілетін қозы" } },
        "46": { ru: { title: "Филе миньон с картофельным пюре и соусом кано пепе", desc: "Филе миньон с пюре" }, en: { title: "Filet Mignon with Mashed Potatoes and Cano Pepe Sauce", desc: "Filet mignon with purée" }, kk: { title: "Картоп езбесі мен кано пепе соусымен филе миньон", desc: "Езбемен берілетін филе миньон" } },
        "47": { ru: { title: "Стейк из говядины с персиковым соусом", desc: "Стейк с персиковым соусом" }, en: { title: "Beef Steak with Peach Sauce", desc: "Steak with peach sauce" }, kk: { title: "Шабдалы соусымен сиыр етінен жасалған стейк", desc: "Шабдалы соусымен стейк" } },
        "48": { ru: { title: "Стейк из конины с копченным соусом", desc: "Стейк из конины с соусом" }, en: { title: "Horse Meat Steak with Smoked Sauce", desc: "Horse meat steak with sauce" }, kk: { title: "Ысталған соуспен жылқы етінен жасалған стейк", desc: "Соуспен берілетін жылқы еті стейкі" } },
        "49": { ru: { title: "Кебаб из говядины", desc: "Шашлычки из говядины" }, en: { title: "Beef Kebab", desc: "Beef skewers" }, kk: { title: "Сиыр етінен жасалған кәуап", desc: "Сиыр етінен жасалған кәуап" } },
        "50": { ru: { title: "Кебаб из баранины", desc: "Шашлычки из баранины" }, en: { title: "Lamb Kebab", desc: "Lamb skewers" }, kk: { title: "Қой етінен жасалған кәуап", desc: "Қой етінен жасалған кәуап" } },
        "51": { ru: { title: "Кебаб из куриного бедра", desc: "Шашлычки из куриного бедра" }, en: { title: "Chicken Thigh Kebab", desc: "Chicken thigh skewers" }, kk: { title: "Тауық санынан жасалған кәуап", desc: "Тауық санынан жасалған кәуап" } },
        "52": { ru: { title: "Бараньи ребра с морковным пюре и финиковым глейзом", desc: "Ребра с морковным пюре" }, en: { title: "Lamb Ribs with Carrot Purée and Date Glaze", desc: "Ribs with carrot purée" }, kk: { title: "Сәбіз езбесі мен құрма глазурімен қой қабырғалары", desc: "Сәбіз езбесімен қабырғалар" } },
        "53": { ru: { title: "Томленный казы барбекю", desc: "Традиционный казы" }, en: { title: "Stewed Kazy Barbecue", desc: "Traditional kazy" }, kk: { title: "Бұқтырылған қазы барбекю", desc: "Дәстүрлі қазы" } },
        "54": { ru: { title: "Ассорти кебабов", desc: "Микс из разных кебабов" }, en: { title: "Kebab Assortment", desc: "Mix of different kebabs" }, kk: { title: "Кәуап ассортиі", desc: "Түрлі кәуаптардың қоспасы" } },
        "55": { ru: { title: "Ассорти МОККОС", desc: "Фирменное мясное ассорти" }, en: { title: "MOKKOS Assortment", desc: "Signature meat assortment" }, kk: { title: "МОККОС ассортиі", desc: "Фирмалық ет ассортиі" } },
        "56": { ru: { title: "Лопатка ягненка", desc: "Лопатка ягненка на компанию" }, en: { title: "Lamb Shoulder", desc: "Lamb shoulder for sharing" }, kk: { title: "Қозының жауырыны", desc: "Компанияға арналған қозы жауырыны" } },
        "57": { ru: { title: "Цыпленок на компанию", desc: "Целый цыпленок с гарнирами" }, en: { title: "Chicken for Sharing", desc: "Whole chicken with side dishes" }, kk: { title: "Компанияға арналған балапан", desc: "Гарнирмен берілетін тұтас балапан" } },
        "58": { ru: { title: "Пепперони", desc: "Классическая пицца с пепперони" }, en: { title: "Pepperoni", desc: "Classic pizza with pepperoni" }, kk: { title: "Пепперони", desc: "Пепперони қосылған классикалық пицца" } },
        "59": { ru: { title: "Черри / базилик / томатная сальса", desc: "Пицца с черри и базиликом" }, en: { title: "Cherry / Basil / Tomato Salsa", desc: "Pizza with cherry tomatoes and basil" }, kk: { title: "Черри / Базилик / Қызанақ сальсасы", desc: "Черри қызанағы мен базилик қосылған пицца" } },
        "60": { ru: { title: "Курица / грибы / трюфельный соус", desc: "Пицца с курицей и грибами" }, en: { title: "Chicken / Mushrooms / Truffle Sauce", desc: "Pizza with chicken and mushrooms" }, kk: { title: "Тауық еті / Саңырауқұлақ / Трюфель соусы", desc: "Тауық еті мен саңырауқұлақ қосылған пицца" } },
        "61": { ru: { title: "Сырная с соусом бешамель", desc: "Сырная пицца с соусом бешамель" }, en: { title: "Cheese Pizza with Béchamel Sauce", desc: "Cheese pizza with béchamel sauce" }, kk: { title: "Бешамель соусымен ірімшік пицца", desc: "Бешамель соусымен ірімшік пицца" } },
        "62": { ru: { title: "Мясная", desc: "Пицца с ассорти мяса" }, en: { title: "Meat Pizza", desc: "Pizza with assorted meats" }, kk: { title: "Ет пиццасы", desc: "Ет ассортиімен пицца" } },
        "63": { ru: { title: "Картофель фри", desc: "Хрустящий картофель" }, en: { title: "French Fries", desc: "Crispy potatoes" }, kk: { title: "Картоп фри", desc: "Қытырлақ картоп" } },
        "64": { ru: { title: "Картофельное пюре", desc: "Нежное пюре с маслом" }, en: { title: "Mashed Potatoes", desc: "Tender purée with butter" }, kk: { title: "Картоп езбесі", desc: "Май қосылған нәзік езбе" } },
        "65": { ru: { title: "Трюфельное пюре", desc: "Пюре с ароматом трюфеля" }, en: { title: "Truffle Purée", desc: "Purée with truffle aroma" }, kk: { title: "Трюфель езбесі", desc: "Трюфель хош иісі бар езбе" } },
        "66": { ru: { title: "Овощи на гриле", desc: "Сезонные овощи" }, en: { title: "Grilled Vegetables", desc: "Seasonal vegetables" }, kk: { title: "Грильде пісірілген көкөністер", desc: "Маусымдық көкөністер" } },
        "67": { ru: { title: "Жареный шпинат с соусом вафу", desc: "Шпинат с соусом вафу" }, en: { title: "Fried Spinach with Wafu Sauce", desc: "Spinach with wafu sauce" }, kk: { title: "Вафу соусымен қуырылған шпинат", desc: "Вафу соусымен шпинат" } },
        "68": { ru: { title: "Рис отварной", desc: "Белый рис" }, en: { title: "Boiled Rice", desc: "White rice" }, kk: { title: "Пісірілген күріш", desc: "Ақ күріш" } },
        "69": { ru: { title: "Картофель айдахо", desc: "Картофель по-деревенски" }, en: { title: "Idaho Potatoes", desc: "Country-style potatoes" }, kk: { title: "Айдахо картобы", desc: "Ауылша картоп" } },
        "70": { ru: { title: "Пита с соленым маслом и дукой", desc: "Пита с маслом и специями" }, en: { title: "Pita with Salted Butter and Dukkah", desc: "Pita with butter and spices" }, kk: { title: "Тұздалған май мен дукка қосылған пита", desc: "Май мен дәмдеуіштер қосылған пита" } },
        "71": { ru: { title: "Бриошь", desc: "Сливочный хлеб с маслом" }, en: { title: "Brioche", desc: "Buttery bread with butter" }, kk: { title: "Бриошь", desc: "Май қосылған кілегейлі нан" } },
        "72": { ru: { title: "Деревенский хлеб", desc: "Ароматный деревенский хлеб" }, en: { title: "Country Bread", desc: "Aromatic country bread" }, kk: { title: "Ауыл наны", desc: "Хош иісті ауыл наны" } },
        "73": { ru: { title: "Баскский чизкейк с соленой карамелью", desc: "Чизкейк с соленой карамелью" }, en: { title: "Basque Cheesecake with Salted Caramel", desc: "Cheesecake with salted caramel" }, kk: { title: "Тұзды карамельмен баск чизкейкі", desc: "Тұзды карамельмен чизкейк" } },
        "74": { ru: { title: "Чуррос с корицей, мороженым и шоколадным кремом", desc: "Хрустящие чуррос с десертами" }, en: { title: "Churros with Cinnamon, Ice Cream, and Chocolate Cream", desc: "Crispy churros with desserts" }, kk: { title: "Даршын, балмұздақ және шоколад кремімен чуррос", desc: "Десерттермен қытырлақ чуррос" } },
        "75": { ru: { title: "Панакота с алоэ и клубничным конфитюром", desc: "Нежная панакота с ягодами" }, en: { title: "Panna Cotta with Aloe and Strawberry Confiture", desc: "Delicate panna cotta with berries" }, kk: { title: "Алоэ мен құлпынай конфитюрімен панакота", desc: "Жеміс-жидектермен нәзік панакота" } },
        "76": { ru: { title: "Шоколадный брауни с мороженым и соленой карамелью", desc: "Шоколадный брауни с мороженым" }, en: { title: "Chocolate Brownie with Ice Cream and Salted Caramel", desc: "Chocolate brownie with ice cream" }, kk: { title: "Балмұздақ пен тұзды карамельмен шоколадты брауни", desc: "Балмұздақпен шоколадты брауни" } }
    },
    bar_items: {
        "b1": { ru: { name: "Blue moon", desc: "(водка, бейлис, блю кюрасао, сливки)" }, en: { name: "Blue moon", desc: "(vodka, baileys, blue curacao, cream)" }, kk: { name: "Blue moon", desc: "(арақ, бейлис, блю кюрасао, кілегей)" } },
        "b2": { ru: { name: "Aperol Shpritz", desc: "(просекко, апероль, содовая)" }, en: { name: "Aperol Shpritz", desc: "(prosecco, aperol, soda)" }, kk: { name: "Aperol Shpritz", desc: "(просекко, апероль, сода)" } },
        "b3": { ru: { name: "Mifits", desc: "(блю кюрасао, сахар, содовая)" }, en: { name: "Mifits", desc: "(blue curacao, sugar, soda)" }, kk: { name: "Mifits", desc: "(блю кюрасао, қант, сода)" } },
        "b4": { ru: { name: "Mokkos", desc: "(виски, кокос, лимон, сухое красное вино, абсент)" }, en: { name: "Mokkos", desc: "(whisky, coconut, lemon, dry red wine, absinthe)" }, kk: { name: "Mokkos", desc: "(виски, кокос, лимон, құрғақ қызыл шарап, абсент)" } },
        "b5": { ru: { name: "Nuts Vulgar", desc: "(джин, лимон, кокос, спрайт)" }, en: { name: "Nuts Vulgar", desc: "(gin, lemon, coconut, sprite)" }, kk: { name: "Nuts Vulgar", desc: "(джин, лимон, кокос, спрайт)" } },
        "b6": { ru: { name: "Burning Lamborghini", desc: "(калуа, самбука, бейлис, блю кюрасао)" }, en: { name: "Burning Lamborghini", desc: "(kahlua, sambuca, baileys, blue curacao)" }, kk: { name: "Burning Lamborghini", desc: "(калуа, самбука, бейлис, блю кюрасао)" } },
        "b7": { ru: { name: "Tiramisu Martini", desc: "(мартини, бейлис, калуа, эспрессо, какао, савоярди)" }, en: { name: "Tiramisu Martini", desc: "(martini, baileys, kahlua, espresso, cocoa, savoiardi)" }, kk: { name: "Tiramisu Martini", desc: "(мартини, бейлис, калуа, эспрессо, какао, савоярди)" } },
        "b8": { ru: { name: "Spiced Maple Paloma", desc: "(текила, грейпфрутовый сок, лайм, кленовый сироп)" }, en: { name: "Spiced Maple Paloma", desc: "(tequila, grapefruit juice, lime, mapple syrup)" }, kk: { name: "Spiced Maple Paloma", desc: "(текила, грейпфрут шырыны, лайм, үйеңкі шәрбаты)" } },
        "b9": { ru: { name: "Fire Fensi", desc: "(джин, вермут, кампари, жиффар, сок красного апельсина)" }, en: { name: "Fire Fensi", desc: "(gin, vermouth, Campari, Giffard, red orange juice)" }, kk: { name: "Fire Fensi", desc: "(джин, вермут, кампари, жиффар, қызыл апельсин шырыны)" } },
        "b10": { ru: { name: "Jack Frost", desc: "(джин, блю кюрасао, кокосовое молоко, ананасовый сок)" }, en: { name: "Jack Frost", desc: "(Gin, blue curacao, coconut milk, pineapple juice)" }, kk: { name: "Jack Frost", desc: "(Джин, блю кюрасао, кокос сүті, ананас шырыны)" } },
        "b11": { ru: { name: "Peach Lynchburg", desc: "(текила сильвер, трипл сек, сок лайма, персиковый топпинг)" }, en: { name: "Peach Lynchburg", desc: "(tequila silver, triple sec, lime juice, peach topping)" }, kk: { name: "Peach Lynchburg", desc: "(текила сильвер, трипл сек, лайм шырыны, шабдалы топпингі)" } },
        "b12": { ru: { name: "Italian Koffe", desc: "(амаретто, виски)" }, en: { name: "Italian Koffe", desc: "(Amaretto, Whisky)" }, kk: { name: "Italian Koffe", desc: "(Амаретто, Виски)" } },
        "b13": { ru: { name: "Break fast Mjito", desc: "(грейпфрутовый биттер, пюре лайма, пюре апельсина)" }, en: { name: "Break fast Mjito", desc: "(Grapefruit bitter, lime purée, orange purée)" }, kk: { name: "Break fast Mjito", desc: "(Грейпфрут биттері, лайм езбесі, апельсин езбесі)" } },
        "b14": { ru: { name: "Red October", desc: "(свекла, игристый вермут, Spices premix, пюре лайма)" }, en: { name: "Red October", desc: "(Beetroot, sparkling vermouth, Spices premix, lime purée)" }, kk: { name: "Red October", desc: "(Қызылша, газдалған вермут, Spices premix, лайм езбесі)" } },
        "b15": { ru: { name: "El Present", desc: "(Dark Pen, Wine, Orange spritz, гранатовый сироп)" }, en: { name: "El Present", desc: "(Dark Pen, Wine, Orange spritz, pomegranate syrup)" }, kk: { name: "El Present", desc: "(Dark Pen, Wine, Orange spritz, анар шәрбаты)" } },
        "b16": { ru: { name: "Lady Red", desc: "(Gin, Wine, пюре лайма, сироп ваниль, пюре маракуйя)" }, en: { name: "Lady Red", desc: "(Gin, Wine, lime purée, vanilla syrup, passion fruit purée)" }, kk: { name: "Lady Red", desc: "(Gin, Wine, лайм езбесі, ваниль шәрбаты, маракуйя езбесі)" } },
        "b17": { ru: { name: "Hemingway Story", desc: "(ром, пюре лайма, пюре грейпфрут, сахарный сироп)" }, en: { name: "Hemingway Story", desc: "(Rum, lime purée, grapefruit purée, sugar syrup)" }, kk: { name: "Hemingway Story", desc: "(Ром, лайм езбесі, грейпфрут езбесі, қант шәрбаты)" } },
        "b18": { ru: { name: "The Artist", desc: "(Wine, Spritz, пюре маракуйя, пюре манго, пюре лимона)" }, en: { name: "The Artist", desc: "(Wine, Spritz, passion fruit purée, mango purée, lemon purée)" }, kk: { name: "The Artist", desc: "(Wine, Spritz, маракуйя езбесі, манго езбесі, лимон езбесі)" } },
        "b19": { ru: { name: "Tommy Dee", desc: "(виски, апельсиновый биттер, пюре маракуйя, сироп агар)" }, en: { name: "Tommy Dee", desc: "(Whisky, orange bitter, passion fruit purée, agar syrup)" }, kk: { name: "Tommy Dee", desc: "(Виски, апельсин биттері, маракуйя езбесі, агар шәрбаты)" } },
        "b20": { ru: { name: "B-52", desc: "(калуа, бейлис, трипл сек)" }, en: { name: "B-52", desc: "(kahlua, baileys, triple sec)" }, kk: { name: "B-52", desc: "(калуа, бейлис, трипл сек)" } },
        "b21": { ru: { name: "B-55", desc: "(калуа, бейлис, абсент)" }, en: { name: "B-55", desc: "(kahlua, baileys, absinthe)" }, kk: { name: "B-55", desc: "(калуа, бейлис, абсент)" } },
        "b22": { ru: { name: "Hiroshima", desc: "(самбука, бейлис, абсент, гренадин)" }, en: { name: "Hiroshima", desc: "(sambuca, baileys, absinthe, grenadine)" }, kk: { name: "Hiroshima", desc: "(самбука, бейлис, абсент, гренадин)" } },
        "b23": { ru: { name: "Red dog", desc: "(текила, самбука, табаско)" }, en: { name: "Red dog", desc: "(tequila, sambuca, tabasco)" }, kk: { name: "Red dog", desc: "(текила, самбука, табаско)" } },
        "b24": { ru: { name: "Clouds", desc: "(текила, блю кюрасао, бейлис, абсент)" }, en: { name: "Clouds", desc: "(tequila, blue curacao, baileys, absinthe)" }, kk: { name: "Clouds", desc: "(текила, блю кюрасао, бейлис, абсент)" } },
        "b25": { ru: { name: "Hurricane", desc: "(виски, трипл сек, егермейстер)" }, en: { name: "Hurricane", desc: "(whisky, triple sec, jagermeister)" }, kk: { name: "Hurricane", desc: "(виски, трипл сек, егермейстер)" } },
        "b26": { ru: { name: "Bali Vibe", desc: "(кокос, ананас, маракуйя, клубника)" }, en: { name: "Bali Vibe", desc: "(coconut, pineapple, passion fruit, strawberry)" }, kk: { name: "Bali Vibe", desc: "(кокос, ананас, маракуйя, құлпынай)" } },
        "b27": { ru: { name: "Zhigan lemon", desc: "(лайм, маракуйя, клубника)" }, en: { name: "Zhigan lemon", desc: "(lime, passion fruit, strawberry)" }, kk: { name: "Zhigan lemon", desc: "(лайм, маракуйя, құлпынай)" } },
        "b28": { ru: { name: "Red moon", desc: "(груша, дыня, барбарис, виноград)" }, en: { name: "Red moon", desc: "(pear, melon, barberry, grape)" }, kk: { name: "Red moon", desc: "(алмұрт, қауын, бөртегүл, жүзім)" } },
        "b29": { ru: { name: "Koka Moka", desc: "(кокос, барбарис, грейпфрут)" }, en: { name: "Koka Moka", desc: "(coconut, barberry, grapefruit)" }, kk: { name: "Koka Moka", desc: "(кокос, бөртегүл, грейпфрут)" } },
        "b30": { ru: { name: "Mango passion fruit", desc: "(манго, маракуйя, мята)" }, en: { name: "Mango passion fruit", desc: "(mango, passion fruit, mint)" }, kk: { name: "Mango passion fruit", desc: "(манго, маракуйя, жалбыз)" } },
        "b31": { ru: { name: "Tarragon", desc: "(барбарис, мята, тархун)" }, en: { name: "Tarragon", desc: "(barberry, mint, tarragon)" }, kk: { name: "Tarragon", desc: "(бөртегүл, жалбыз, тархун)" } },
        "b32": { ru: { name: "Чай Ташкентский", desc: "(лимон, апельсин, чай черный зеленый, мед, мята, нават)" }, en: { name: "Tashkent Tea", desc: "(lemon, orange, black green tea, honey, mint, navat)" }, kk: { name: "Ташкент шайы", desc: "(лимон, апельсин, қара жасыл шай, бал, жалбыз, науат)" } },
        "b33": { ru: { name: "Чай Гранатовый", desc: "(яблоко, мед, зерна граната, чай черный, лимон)" }, en: { name: "Pomegranate Tea", desc: "(apple, honey, pomegranate seeds, black tea, lemon)" }, kk: { name: "Анар шайы", desc: "(алма, бал, анар дәндері, қара шай, лимон)" } },
        "b34": { ru: { name: "Чай Малиновый", desc: "(малина, чай черный, нават, тимьян, мята)" }, en: { name: "Raspberry Tea", desc: "(raspberry, black tea, navat, thyme, mint)" }, kk: { name: "Таңқурай шайы", desc: "(таңқурай, қара шай, науат, тимьян, жалбыз)" } },
        "b35": { ru: { name: "Чай Облепиховый", desc: "(облепиха, мед, чай черный, апельсин, корица)" }, en: { name: "Sea Buckthorn Tea", desc: "(sea buckthorn, honey, black tea, orange, cinnamon)" }, kk: { name: "Шырғанақ шайы", desc: "(шырғанақ, бал, қара шай, апельсин, даршын)" } },
        "b36": { ru: { name: "Чай Тропический", desc: "(груша, ананас, апельсин, черный чай, виноград)" }, en: { name: "Tropical Tea", desc: "(pear, pineapple, orange, black tea, grape)" }, kk: { name: "Тропикалық шай", desc: "(алмұрт, ананас, апельсин, қара шай, жүзім)" } },
        "b37": { ru: { name: "Чай Медовая Груша", desc: "(яблоко, корица, мед, апельсин, черный чай, тимьян, виноград)" }, en: { name: "Honey Pear Tea", desc: "(apple, cinnamon, honey, orange, black tea, thyme, grape)" }, kk: { name: "Балды алмұрт шайы", desc: "(алма, даршын, бал, апельсин, қара шай, тимьян, жүзім)" } },
        "b38": { ru: { name: "Чай черный чайник", desc: "" }, en: { name: "Black Tea (pot)", desc: "" }, kk: { name: "Қара шай (шәйнек)", desc: "" } },
        "b39": { ru: { name: "Чай зеленый чайник", desc: "" }, en: { name: "Green Tea (pot)", desc: "" }, kk: { name: "Көк шай (шәйнек)", desc: "" } },
        "b40": { ru: { name: "Чай черный порция", desc: "" }, en: { name: "Black Tea (cup)", desc: "" }, kk: { name: "Қара шай (кесе)", desc: "" } },
        "b41": { ru: { name: "Чай зеленый порция", desc: "" }, en: { name: "Green Tea (cup)", desc: "" }, kk: { name: "Көк шай (кесе)", desc: "" } },
        "b42": { ru: { name: "Порция лимона", desc: "" }, en: { name: "Portion of lemon", desc: "" }, kk: { name: "Лимон порциясы", desc: "" } },
        "b43": { ru: { name: "Порция молока", desc: "" }, en: { name: "Portion of milk", desc: "" }, kk: { name: "Сүт порциясы", desc: "" } },
        "b44": { ru: { name: "Порция меда", desc: "" }, en: { name: "Portion of honey", desc: "" }, kk: { name: "Бал порциясы", desc: "" } },
        "b45": { ru: { name: "Vive La Vie (бут.)", desc: "Безалкогольное вино" }, en: { name: "Vive La Vie (bottle)", desc: "Non-alcoholic wine" }, kk: { name: "Vive La Vie (бөтелке)", desc: "Алкогольсіз шарап" } },
        "b46": { ru: { name: "Vive La Vie (бок.)", desc: "Безалкогольное вино" }, en: { name: "Vive La Vie (glass)", desc: "Non-alcoholic wine" }, kk: { name: "Vive La Vie (бокал)", desc: "Алкогольсіз шарап" } },
        "b47": { ru: { name: "Heineken 0,33", desc: "Безалкогольное пиво" }, en: { name: "Heineken 0.33", desc: "Non-alcoholic beer" }, kk: { name: "Heineken 0,33", desc: "Алкогольсіз сыра" } },
        "b48": { ru: { name: "Сок в ассортименте 1л", desc: "" }, en: { name: "Juice assortment 1L", desc: "" }, kk: { name: "Шырын ассортименті 1л", desc: "" } },
        "b49": { ru: { name: "Coca-cola 0,25", desc: "" }, en: { name: "Coca-cola 0.25", desc: "" }, kk: { name: "Coca-cola 0,25", desc: "" } },
        "b50": { ru: { name: "Coca-cola без сахара 0,25", desc: "" }, en: { name: "Coca-cola zero sugar 0.25", desc: "" }, kk: { name: "Coca-cola қантсыз 0,25", desc: "" } },
        "b51": { ru: { name: "Tassay 0,5", desc: "Вода" }, en: { name: "Tassay 0.5", desc: "Water" }, kk: { name: "Tassay 0,5", desc: "Су" } },
        "b52": { ru: { name: "Боржоми 0,5", desc: "Вода" }, en: { name: "Borjomi 0.5", desc: "Water" }, kk: { name: "Боржоми 0,5", desc: "Су" } },
        "b53": { ru: { name: "Боржоми 0,33", desc: "Вода" }, en: { name: "Borjomi 0.33", desc: "Water" }, kk: { name: "Боржоми 0,33", desc: "Су" } },
        "b54": { ru: { name: "Jägermeister", desc: "Травяной ликер" }, en: { name: "Jägermeister", desc: "Herbal liqueur" }, kk: { name: "Jägermeister", desc: "Шөп ликері" } },
        "b55": { ru: { name: "Baileys", desc: "Ирландский крем-ликер" }, en: { name: "Baileys", desc: "Irish cream liqueur" }, kk: { name: "Baileys", desc: "Ирландиялық крем-ликер" } },
        "b56": { ru: { name: "Kahlúa", desc: "Кофейный ликер" }, en: { name: "Kahlúa", desc: "Coffee liqueur" }, kk: { name: "Kahlúa", desc: "Кофе ликері" } },
        "b57": { ru: { name: "Sambuca", desc: "Анисовый ликер" }, en: { name: "Sambuca", desc: "Anise liqueur" }, kk: { name: "Sambuca", desc: "Анис ликері" } },
        "b58": { ru: { name: "Triple Sec", desc: "Апельсиновый ликер" }, en: { name: "Triple Sec", desc: "Orange liqueur" }, kk: { name: "Triple Sec", desc: "Апельсин ликері" } },
        "b59": { ru: { name: "Blue Curaçao", desc: "Апельсиновый ликер синего цвета" }, en: { name: "Blue Curaçao", desc: "Blue orange liqueur" }, kk: { name: "Blue Curaçao", desc: "Көк түсті апельсин ликері" } },
        "b60": { ru: { name: "Jameson Original", desc: "Ирландский виски" }, en: { name: "Jameson Original", desc: "Irish whiskey" }, kk: { name: "Jameson Original", desc: "Ирландиялық виски" } },
        "b61": { ru: { name: "Jameson Orange", desc: "Апельсиновый виски" }, en: { name: "Jameson Orange", desc: "Orange whiskey" }, kk: { name: "Jameson Orange", desc: "Апельсин вискиі" } },
        "b62": { ru: { name: "Chivas Regal 12YO", desc: "Шотландский купажированный" }, en: { name: "Chivas Regal 12YO", desc: "Scotch blended" }, kk: { name: "Chivas Regal 12YO", desc: "Шотландиялық купаждалған" } },
        "b63": { ru: { name: "Glenfiddich 12YO", desc: "Односолодовый виски" }, en: { name: "Glenfiddich 12YO", desc: "Single malt whisky" }, kk: { name: "Glenfiddich 12YO", desc: "Бір уытты виски" } },
        "b64": { ru: { name: "Monkey Shoulder", desc: "Тройной солодовый виски" }, en: { name: "Monkey Shoulder", desc: "Triple malt whisky" }, kk: { name: "Monkey Shoulder", desc: "Үш уытты виски" } },
        "b65": { ru: { name: "Jack Daniel's", desc: "Теннесси виски" }, en: { name: "Jack Daniel's", desc: "Tennessee whiskey" }, kk: { name: "Jack Daniel's", desc: "Теннесси вискиі" } },
        "b66": { ru: { name: "Beefeater Original", desc: "Лондонский сухой джин" }, en: { name: "Beefeater Original", desc: "London dry gin" }, kk: { name: "Beefeater Original", desc: "Лондондық құрғақ джин" } },
        "b67": { ru: { name: "Beefeater Blackberry", desc: "Ежевичный джин" }, en: { name: "Beefeater Blackberry", desc: "Blackberry gin" }, kk: { name: "Beefeater Blackberry", desc: "Бүлдірген джині" } },
        "b68": { ru: { name: "Beefeater Blood Orange", desc: "Кровавый апельсин" }, en: { name: "Beefeater Blood Orange", desc: "Blood orange" }, kk: { name: "Beefeater Blood Orange", desc: "Қанды апельсин" } },
        "b69": { ru: { name: "Monkey 47", desc: "Премиальный немецкий джин" }, en: { name: "Monkey 47", desc: "Premium German gin" }, kk: { name: "Monkey 47", desc: "Премиум неміс джині" } },
        "b70": { ru: { name: "Hendrick's", desc: "Шотландский джин с огурцом и розой" }, en: { name: "Hendrick's", desc: "Scottish gin with cucumber and rose" }, kk: { name: "Hendrick's", desc: "Қияр мен раушан қосылған шотланд джині" } },
        "b71": { ru: { name: "Havana Club 3 YO", desc: "Белый кубинский ром" }, en: { name: "Havana Club 3 YO", desc: "White Cuban rum" }, kk: { name: "Havana Club 3 YO", desc: "Ақ кубалық ром" } },
        "b72": { ru: { name: "Havana Club 7 YO", desc: "Выдержанный кубинский ром" }, en: { name: "Havana Club 7 YO", desc: "Aged Cuban rum" }, kk: { name: "Havana Club 7 YO", desc: "Тұндырылған кубалық ром" } },
        "b73": { ru: { name: "Bacardi Carta Blanca", desc: "Белый ром" }, en: { name: "Bacardi Carta Blanca", desc: "White rum" }, kk: { name: "Bacardi Carta Blanca", desc: "Ақ ром" } },
        "b74": { ru: { name: "Captain Morgan Spiced Gold", desc: "Пряный золотой ром" }, en: { name: "Captain Morgan Spiced Gold", desc: "Spiced gold rum" }, kk: { name: "Captain Morgan Spiced Gold", desc: "Дәмдеуішті алтын ром" } },
        "b75": { ru: { name: "Malibu", desc: "Кокосовый ром" }, en: { name: "Malibu", desc: "Coconut rum" }, kk: { name: "Malibu", desc: "Кокос ромы" } },
        "b76": { ru: { name: "Absolut Original", desc: "Шведская водка" }, en: { name: "Absolut Original", desc: "Swedish vodka" }, kk: { name: "Absolut Original", desc: "Швед арағы" } },
        "b77": { ru: { name: "Absolut Vanilia", desc: "Ванильная водка" }, en: { name: "Absolut Vanilia", desc: "Vanilla vodka" }, kk: { name: "Absolut Vanilia", desc: "Ванильді арақ" } },
        "b78": { ru: { name: "Absolut Grapefruit", desc: "Грейпфрутовая водка" }, en: { name: "Absolut Grapefruit", desc: "Grapefruit vodka" }, kk: { name: "Absolut Grapefruit", desc: "Грейпфрут арағы" } },
        "b79": { ru: { name: "Grey Goose", desc: "Французская премиальная водка" }, en: { name: "Grey Goose", desc: "French premium vodka" }, kk: { name: "Grey Goose", desc: "Француз премиум арағы" } },
        "b80": { ru: { name: "Beluga", desc: "Российская премиальная водка" }, en: { name: "Beluga", desc: "Russian premium vodka" }, kk: { name: "Beluga", desc: "Ресейлік премиум арақ" } },
        "b81": { ru: { name: "Olmeca Silver", desc: "Серебряная текила" }, en: { name: "Olmeca Silver", desc: "Silver tequila" }, kk: { name: "Olmeca Silver", desc: "Күміс текила" } },
        "b82": { ru: { name: "Olmeca Gold", desc: "Золотая текила" }, en: { name: "Olmeca Gold", desc: "Gold tequila" }, kk: { name: "Olmeca Gold", desc: "Алтын текила" } },
        "b83": { ru: { name: "Jose Cuervo Especial", desc: "Традиционная мексиканская текила" }, en: { name: "Jose Cuervo Especial", desc: "Traditional Mexican tequila" }, kk: { name: "Jose Cuervo Especial", desc: "Дәстүрлі мексикалық текила" } },
        "b84": { ru: { name: "Patrón Silver", desc: "Премиальная серебряная текила" }, en: { name: "Patrón Silver", desc: "Premium silver tequila" }, kk: { name: "Patrón Silver", desc: "Премиум күміс текила" } }
    }
};

// Data for the main food menu.
const menuData = [
    // ЗАВТРАКИ
    { id: 1, price: 4500, category: "breakfast", ingredients: ["Слабосоленый лосось", "Яйцо на выбор (скрембел, пятиминутка, глазунья)", "Брокколи", "Авокадо", "Томаты", "Томатная сальса", "Соус дзадзики", "Два кусочка поджаренного хлеба бриошь"] },
    { id: 2, price: 3500, category: "breakfast", ingredients: ["Хрустящий цыпленок", "Яйцо на выбор (скрембел, пятиминутка, глазунья)", "Брокколи", "Авокадо", "Томаты", "Томатная сальса", "Соус дзадзики", "Два кусочка поджаренного хлеба бриошь"] },
    { id: 3, price: 3700, category: "breakfast", ingredients: ["Хлеб Хоккайдо", "Пастрами из индейки", "Микс зелени", "Два яйца пашот", "Голландский соус"] },
    { id: 4, price: 2500, category: "breakfast", ingredients: ["Сальса верде, взбитая с яйцом", "Томатная сальса", "Фета", "Свежий базилик", "Мята"] },
    { id: 5, price: 7000, category: "breakfast", ingredients: ["Пита и деревенский хлеб", "Воздушный скрэмбл", "Томатная сальса", "Сувлаки из цыпленка", "Дзадзики", "Тарамасала из икры трески", "Хумус", "Бабагануш", "Печёные оливки", "Салат из томатов", "Сметана с мёдом"] },
    { id: 6, price: 3500, category: "breakfast", ingredients: ["Домашние сырники", "Греческий йогурт", "Тертая малина", "Мед"] },
    // ЗАКУСКИ
    { id: 7, price: 2800, category: "appetizers", ingredients: ["Целый запеченный баклажан", "Томатная сальса", "Кинза", "Фета", "Микс семечек", "Маринованный в соусе сальсаверде"] },
    { id: 8, price: 2700, category: "appetizers", ingredients: ["Паштет из печени цыпленка", "Хлеб на закваске", "Зернистая горчица", "Маринованный инжир", "Фундук"] },
    { id: 9, price: 3200, category: "appetizers", ingredients: ["3 шт тако", "Томленные щечки", "Пряная сальса", "Соус"] },
    { id: 10, price: 3300, category: "appetizers", ingredients: ["Цыпленок в панировке", "Брокколи", "Кинза", "Яйцо 5 минутка", "Томаты", "Маринованный лук", "Рис"] },
    { id: 11, price: 3900, category: "appetizers", ingredients: ["Лосось", "Свекла", "Рис", "Томаты", "Шпинат", "Брокколи", "Маринованный лук", "Яйцо 5 мин"] },
    { id: 12, price: 5900, category: "appetizers", ingredients: ["Жареные креветки", "Томатный соус", "Фета"] },
    { id: 13, price: 3500, category: "appetizers", ingredients: ["Говяжий язык", "Картошка", "Лук маринованный", "Горчица", "Зелень"] },
    { id: 14, price: 5500, category: "appetizers", ingredients: ["2 питы", "Бабагануш", "Хумус", "Тарамасала из икры трески", "Икра", "Дзадзыки", "Печёные оливки"] },
    { id: 15, price: 3500, category: "appetizers", ingredients: ["Костный мозг", "Соус демигляс", "Сальса Верде", "Печеный чеснок", "Деревенский хлеб", "Халапеньо"] },
    { id: 16, price: 3500, category: "appetizers", ingredients: ["Маленькие бараньи ребрышки", "Острый соус", "250г порция"] },
    // САЛАТЫ
    { id: 17, price: 1800, category: "salads", ingredients: ["Огурек", "Помидор", "Укроп", "Сметана", "Соль", "Лимон"] },
    { id: 18, price: 3680, category: "salads", ingredients: ["Микс зелени (руккола, шпинат, мангольд, айсберг)", "Огурец нарезанный слайсами", "Брокколи", "Фета", "Микс семечек", "Шашлычок из цукини и авокадо"] },
    { id: 19, price: 3900, category: "salads", ingredients: ["Руккола", "Трюфельная паста", "Томатная сальса", "Лимонный дрейзинг", "Томаты", "Оливки гиганты", "Картофельный чипсы", "Пармезан", "Оливковое масло"] },
    { id: 20, price: 4500, category: "salads", ingredients: ["Микс зелени", "Помидоры", "Пита", "Лук красный маринованный", "Соус панцаннелла (базилик, анчоус)", "Жареные креветки", "Хлопья миндаля"] },
    { id: 21, price: 3800, category: "salads", ingredients: ["Микс зелени", "Слайсы цукини", "Брокколи", "Горгонзола", "Финиковая заправка", "Шницель", "Микс семечек"] },
    { id: 22, price: 2400, category: "salads", ingredients: ["Лабне", "Свекла маринованная в смородиновом сиропе", "Маринованый инжир", "Фундук"] },
    { id: 23, price: 4300, category: "salads", ingredients: ["Эдамаме (соевые бобы)", "Брокколи", "Микс зелени", "Ореховая заправка"] },
    // СУПЫ
    { id: 24, price: 4500, category: "soups", ingredients: ["Креветки", "Мидии", "Кальмары", "Лист кафрского лайма", "Черри", "Шампиньоны", "Кокосовое молочко", "Рис с кинзой и лаймом"] },
    { id: 25, price: 3500, category: "soups", ingredients: ["Слабосоленый лосось", "Овощи", "Квас", "Сметана", "Зелень"] },
    { id: 26, price: 2800, category: "soups", ingredients: ["Ветчина", "Овощи", "Квас", "Сметана", "Зелень"] },
    { id: 27, price: 1200, category: "soups", ingredients: ["Куриный бульон", "Яйцо", "Зелень"] },
    { id: 28, price: 3000, category: "soups", ingredients: ["Горошек", "Пастрами из индейки", "Деревенский хлеб", "Два пюре (фасоль, шпинат)", "Сливки", "Куриный бульон"] },
    { id: 29, price: 2700, category: "soups", ingredients: ["Суп на основе зеленой чечевицы", "Помидоры", "Баклажаны", "Томленый ягненок", "Соус демигляс", "Сметана", "Кинза"] },
    // ПАСТЫ
    { id: 30, price: 4500, category: "pasta", ingredients: ["Кальмары", "Мидии", "Креветки", "Томатный соус", "Помидоры канкассе", "Домашняя паста"] },
    { id: 31, price: 4000, category: "pasta", ingredients: ["Куриное бедро", "Грибное рагу", "Соус демигляс", "Сливочное масло", "Паста фузили"] },
    { id: 32, price: 4000, category: "pasta", ingredients: ["Ньокки на основе картофельного пюре", "Ягненок", "Шпинат", "Печеный перец", "Соус демигляс", "Сливочное масло"] },
    { id: 33, price: 4300, category: "pasta", ingredients: ["Телятина", "Домашнее лечо", "Сальса Верде"] },
    // РЫБА И МОРЕПРОДУКТЫ
    { id: 34, price: 6500, category: "fish", ingredients: ["Филе семги", "Шпинат в соусе вафу", "Хлеб со взбитыми сливочным маслом"] },
    { id: 35, price: 6000, category: "fish", ingredients: ["Рыба без костей", "Соус из печеных перцов на основе миндаля", "Долька лимона"] },
    { id: 36, price: 5900, category: "fish", ingredients: ["Кальмары", "Креветки", "Мидии", "Печеный перец", "Томатный соус", "Хлеб бриошь", "Кинза"] },
    { id: 37, price: 8500, category: "fish", ingredients: ["Осьминог", "Соус ромеско", "Картофельные чипсы", "Лечо"] },
    // ПТИЦА
    { id: 38, price: 3500, category: "poultry", ingredients: ["Куриное бедро в панировке", "Салат айсберг", "Соус боул", "Перечный соус", "Пармезан"] },
    { id: 39, price: 4500, category: "poultry", ingredients: ["Цыпленок (350-400г)", "Маринованные огурцы", "Маринованный лук", "Пита", "Соус дзадзики"] },
    { id: 40, price: 4500, category: "poultry", ingredients: ["Миндальное пюре", "Маринованный цыпленок", "Шпинат"] },
    { id: 41, price: 6500, category: "poultry", ingredients: ["Конфи (медленное томление)", "Утиная ножка", "Картофельное пюре", "Жареный виноград", "Жареный шпинат"] },
    { id: 42, price: 3000, category: "poultry", ingredients: ["Базилик", "Салат из помидоров канкассе", "Паприка", "Лук маринованный", "Шашлык из цыпленка", "Йогурт греческий", "Гранатовый песто"] },
    // МЯСО
    { id: 43, price: 5900, category: "meat", ingredients: ["Томленные щечки", "Трюфельное пюре", "Соус демигляс", "Соус сальсаверде", "Шампиньоны", "Зелень"] },
    { id: 44, price: 6900, category: "meat", ingredients: ["Тушеные овощи (айвар)", "3 ребра барашка", "Шпинат", "Греческий йогурт"] },
    { id: 45, price: 5800, category: "meat", ingredients: ["Томленный ягненок", "Мятый картофель", "Соус ромеско", "Кинза", "Оливковое масло"] },
    { id: 46, price: 7500, category: "meat", ingredients: ["Вырезка телятины (самая нежная часть)", "Картофельное пюре", "Соус качо Пепе (пармезан, чеснок, черный перец)"] },
    { id: 47, price: 6000, category: "meat", ingredients: ["Рибай/тибон на выбор", "Маринованный лук", "Маринованные огурцы", "Персиковый соус"] },
    { id: 48, price: 8000, category: "meat", ingredients: ["Маринованные огурцы", "Копченый соус", "Красный лук", "Масло", "Вяленый томат"] },
    { id: 49, price: 4000, category: "meat", ingredients: ["Шашлычки из говядины (3 шт)", "Пита", "Лук", "Соус томатная сальса"] },
    { id: 50, price: 3500, category: "meat", ingredients: ["Шашлычки из баранины (3 шт)", "Пита", "Лук", "Соус томатная сальса"] },
    { id: 51, price: 2500, category: "meat", ingredients: ["Шашлычки из куриного бедра (3 шт)", "Пита", "Лук", "Соус томатная сальса"] },
    { id: 52, price: 6000, category: "meat", ingredients: ["Бараньи ребра", "Морковное пюре", "Салат из кинзы и томат сальсы", "Финиковый глейз"] },
    { id: 53, price: 7500, category: "meat", ingredients: ["Казы", "Салат из помидор"] },
    // НА КОМПАНИЮ
    { id: 54, price: 12000, category: "sharing", ingredients: ["Кебаб из говядины", "Кебаб из баранины", "Кебаб из куриного бедра", "2 питы", "Маринованный лук", "Маринованные огурцы", "Соус дзадзики"] },
    { id: 55, price: 22000, category: "sharing", ingredients: ["Лопатка барашка", "Казы", "Пол цыпленка", "Овощи на гриле", "2 питы", "Маринованный лук", "Маринованные огурцы", "Картофельные дольки", "Соус дзадзики"] },
    { id: 56, price: 22000, category: "sharing", ingredients: ["Лопатка ягненка без кости", "2 питы", "Дзадзики", "Маринованный лук", "Огурцы маринованные"] },
    { id: 57, price: 12000, category: "sharing", ingredients: ["Цыпленок (350-400г)", "2 питы", "Маринованные огурцы", "Маринованный лук", "Соус дзадзики"] },
    // ПИЦЦА
    { id: 58, price: 3880, category: "pizza", ingredients: ["Томатный соус", "Пепперони", "Моцарелла"] },
    { id: 59, price: 4500, category: "pizza", ingredients: ["Черри", "Базилик", "Томатная сальса", "Моцарелла"] },
    { id: 60, price: 3500, category: "pizza", ingredients: ["Курица", "Грибы", "Трюфельный бешамель соус", "Моцарелла"] },
    { id: 61, price: 4500, category: "pizza", ingredients: ["Соус бешамель", "Моцарелла", "Пармезан", "Фета"] },
    { id: 62, price: 5000, category: "pizza", ingredients: ["Ветчина", "Маринованный лук", "Соленые огурцы", "Соус ромеско", "Моцарелла"] },
    // ГАРНИРЫ
    { id: 63, price: 800, category: "sides", ingredients: ["Картофель", "Специи"] },
    { id: 64, price: 1000, category: "sides", ingredients: ["Картофель", "Сливочное масло", "Молоко"] },
    { id: 65, price: 1400, category: "sides", ingredients: ["Картофель", "Трюфельное масло", "Сливки"] },
    { id: 66, price: 1700, category: "sides", ingredients: ["Сезонные овощи", "Оливковое масло", "Травы"] },
    { id: 67, price: 1700, category: "sides", ingredients: ["Шпинат", "Соус вафу (дейкон, соевый соус)"] },
    { id: 68, price: 800, category: "sides", ingredients: ["Рис", "Соль"] },
    { id: 69, price: 1500, category: "sides", ingredients: ["Картофель", "Сливочное масло", "Зелень"] },
    // ХЛЕБ
    { id: 70, price: 1000, category: "bread", ingredients: ["Пита", "Масло ноазэт", "Дука (смесь специй)"] },
    { id: 71, price: 1000, category: "bread", ingredients: ["Бриошь", "Сливочное масло"] },
    { id: 72, price: 1000, category: "bread", ingredients: ["Деревенский хлеб", "Сливочное масло", "Дука"] },
    // ДЕСЕРТЫ
    { id: 73, price: 2200, category: "desserts", ingredients: ["Испанский чизкейк классический", "Миндальные хлопья", "Соленая карамель"] },
    { id: 74, price: 2400, category: "desserts", ingredients: ["Заварное тесто обжаренное во фритюре", "Сахар и корица", "Шоколадный крем", "Шарик мороженого"] },
    { id: 75, price: 2200, category: "desserts", ingredients: ["Кокосовая панакота", "Алоэ", "Клубничный конфитюр"] },
    { id: 76, price: 2200, category: "desserts", ingredients: ["Шоколадный бисквит", "Мороженое", "Соленая карамель"] }
];

// Data for the bar menu, structured by category.
const barMenuData = [
    { categoryKey: "bar_cat_cocktails", icon: "fa-cocktail", items: [ { id: "b1", price: 3200 }, { id: "b2", price: 2500 }, { id: "b3", price: 3800 }, { id: "b4", price: 3500 }, { id: "b5", price: 3200 }, { id: "b6", price: 4000 }, { id: "b7", price: 4000 }, { id: "b8", price: 3200 }, { id: "b9", price: 3200 }, { id: "b10", price: 2500 }, { id: "b11", price: 2700 }, { id: "b12", price: 3200 } ] },
    { categoryKey: "bar_cat_non_alcoholic", icon: "fa-glass-martini-alt", items: [ { id: "b13", price: 2500 }, { id: "b14", price: 3000 }, { id: "b15", price: 2500 }, { id: "b16", price: 3000 }, { id: "b17", price: 2500 }, { id: "b18", price: 2500 }, { id: "b19", price: 3000 } ] },
    { categoryKey: "bar_cat_shots", icon: "fa-glass-whiskey", items: [ { id: "b20", price: 3000 }, { id: "b21", price: 3000 }, { id: "b22", price: 3500 }, { id: "b23", price: 2500 }, { id: "b24", price: 4000 }, { id: "b25", price: 3500 } ] },
    { categoryKey: "bar_cat_lemonade", icon: "fa-lemon", items: [ { id: "b26", price: 3500 }, { id: "b27", price: 3500 }, { id: "b28", price: 3500 }, { id: "b29", price: 3500 }, { id: "b30", price: 3500 }, { id: "b31", price: 3500 } ] },
    { categoryKey: "bar_cat_tea", icon: "fa-mug-hot", items: [ { id: "b32", price: 2500 }, { id: "b33", price: 2500 }, { id: "b34", price: 2500 }, { id: "b35", price: 2500 }, { id: "b36", price: 2500 }, { id: "b37", price: 2500 }, { id: "b38", price: 2500 }, { id: "b39", price: 2500 }, { id: "b40", price: 350 }, { id: "b41", price: 350 }, { id: "b42", price: 300 }, { id: "b43", price: 450 }, { id: "b44", price: 600 } ] },
    { categoryKey: "bar_cat_non_alc_wine", icon: "fa-wine-bottle", items: [ { id: "b45", price: 12000 }, { id: "b46", price: 4000 }, { id: "b47", price: 1500 } ] },
    { categoryKey: "bar_cat_drinks", icon: "fa-glass-water", items: [ { id: "b48", price: 1500 }, { id: "b49", price: 800 }, { id: "b50", price: 800 }, { id: "b51", price: 700 }, { id: "b52", price: 1500 }, { id: "b53", price: 1200 } ] },
    { categoryKey: "bar_cat_liqueurs", icon: "fa-wine-bottle", items: [ { id: "b54", price: 1450 }, { id: "b55", price: 1700 }, { id: "b56", price: 1600 }, { id: "b57", price: 1500 }, { id: "b58", price: 1400 }, { id: "b59", price: 1500 } ] },
    { categoryKey: "bar_cat_whiskey", icon: "fa-whiskey-glass", items: [ { id: "b60", price: 2000 }, { id: "b61", price: 2200 }, { id: "b62", price: 2500 }, { id: "b63", price: 4400 }, { id: "b64", price: 3050 }, { id: "b65", price: 2300 } ] },
    { categoryKey: "bar_cat_gin", icon: "fa-wine-glass", items: [ { id: "b66", price: 1600 }, { id: "b67", price: 1900 }, { id: "b68", price: 1900 }, { id: "b69", price: 3900 }, { id: "b70", price: 2800 } ] },
    { categoryKey: "bar_cat_rum", icon: "fa-wine-bottle", items: [ { id: "b71", price: 1480 }, { id: "b72", price: 1600 }, { id: "b73", price: 1400 }, { id: "b74", price: 1500 }, { id: "b75", price: 1700 } ] },
    { categoryKey: "bar_cat_vodka", icon: "fa-glass-water", items: [ { id: "b76", price: 1500 }, { id: "b77", price: 1700 }, { id: "b78", price: 1700 }, { id: "b79", price: 1950 }, { id: "b80", price: 2200 } ] },
    { categoryKey: "bar_cat_tequila", icon: "fa-cactus", items: [ { id: "b81", price: 1490 }, { id: "b82", price: 1490 }, { id: "b83", price: 1600 }, { id: "b84", price: 3500 } ] }
];


/**
 * Displays the food menu items based on the selected category and language.
 * @param {string} lang - The current language code (e.g., 'ru', 'en', 'kk').
 * @param {string} [category='all'] - The category of menu items to display.
 */
function displayMenuItems(lang, category = 'all') {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    const filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);

    filteredItems.forEach(itemData => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        
        const itemTranslations = translations.menu_items[itemData.id] ? translations.menu_items[itemData.id][lang] : {title: 'No translation', desc: 'No description'};

        menuItem.innerHTML = `
          <div class="menu-img"><i class="fas fa-utensils"></i></div>
          <div class="menu-content">
            <h3 class="menu-title">${itemTranslations.title}</h3>
            <div class="menu-price">${itemData.price} ₸</div>
            <p class="menu-desc">${itemTranslations.desc}</p>
            <div class="menu-actions">
              <button class="add-to-cart" data-id="${itemData.id}">${translations[lang].btn_add_to_cart}</button>
              <button class="details-btn" data-id="${itemData.id}">${translations[lang].btn_details}</button>
            </div>
          </div>`;
        menuGrid.appendChild(menuItem);
    });

    // Re-attach event listeners after rendering
    document.querySelectorAll('.add-to-cart').forEach(button => button.addEventListener('click', addToCart));
    document.querySelectorAll('.details-btn').forEach(button => button.addEventListener('click', showDishDetails));
    
    // Trigger animation
    setTimeout(() => {
        document.querySelectorAll('.menu-item').forEach((item, index) => {
            setTimeout(() => item.classList.add('animate'), index * 50);
        });
    }, 100);
}


/**
 * Displays the bar menu items based on the current language.
 * @param {string} lang - The current language code (e.g., 'ru', 'en', 'kk').
 */
function displayBarMenu(lang) {
    const barSection = document.getElementById('bar');
    if (!barSection) return;

    let html = `<div class="container">
                    <h2 class="section-title" data-lang-key="title_bar_menu">${translations[lang].title_bar_menu}</h2>`;

    barMenuData.forEach(category => {
        html += `
            <div class="category-section">
                <h3 class="category-title"><i class="fas ${category.icon}"></i> ${translations[lang][category.categoryKey]}</h3>
                <div class="bar-grid">
        `;
        category.items.forEach(item => {
            const itemTranslation = translations.bar_items[item.id][lang];
            const descHtml = itemTranslation.desc ? `<div class="drink-desc">${itemTranslation.desc}</div>` : '';
            html += `
                    <div class="bar-item">
                        <div>
                            <div class="drink-name">${itemTranslation.name}</div>
                            ${descHtml}
                        </div>
                        <div class="drink-price">${item.price} ₸</div>
                    </div>
            `;
        });
        html += `</div></div>`;
    });

    html += `</div>`;
    barSection.innerHTML = html;

    // Trigger animation for initially visible items
    setTimeout(() => {
        document.querySelectorAll('.bar-item').forEach(item => {
            if (item.getBoundingClientRect().top < window.innerHeight * 0.95) {
                item.classList.add('animate');
            }
        });
    }, 100);
}