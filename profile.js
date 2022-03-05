Alpine.data("inputData", () => ({
    inputList: [
        {
            title: "お名前",
            type: "text",
            validate() {
                // 1文字以上48文字以下
                if (this.value.length > 0 && this.value.length <= 48) {
                    this.message = "";
                } else {
                    this.message =
                        "お名前は1文字以上48文字以下で入力してください。";
                }
            },
        },
        {
            title: "所属",
            type: "text",
            validate() {},
        },
        {
            title: "メール",
            type: "email",
            validate() {},
        },
        {
            title: "件名",
            type: "text",
            validate() {},
        },
        {
            title: "本文",
            type: "textarea",
            validate() {},
        },
    ],
    caption: [
        {
            caption: "Profile",
            faculty: "HAL東京　IT学部高度情報学科 WEB開発専攻 3年",
            alphabet: "Uno Sora",
            name: "宇野 そら",
            validate() {},
        },

    ],
}));

Alpine.data("WorksData", () => ({
  worksList: [
    {
      title: "Café de Paris　カフェサイトデザイン",
      img: "./images/cafe.jpg",
      url: "https://sorauno.github.io/cafe_site/",
    },
    {
      title: "高級フランス料理店サイトデザイン",
      img: "./images/french_restaurant.jpg",
      url: "https://sorauno.github.io/French-restaurant-site/",
    },
    {
      title: "鵠沼海岸　紹介サイトデザイン",
      img: "./images/kugenuma.jpg",
      url: "https://sorauno.github.io/hometown_introduction_site/",
    },
    {
      title: "アマチュア向け写真販売サイト",
      img: "./images/picto.jpg",
      url: "https://sorauno.github.io/Photo_sales_site/",
    },
  ],
}));

Alpine.data("SkillsData", () => ({
  skillsList: [
    {
      title: "HTML5",
      icon: "./images/html5.svg",
      length:"90",
    },
    {
      title: "CSS3",
      icon: "./images/css3.svg",
      length:"80",
    },
    {
      title: "Bootstrap",
      icon: "./images/bootstrap.svg",
      length:"30",
    },
    {
      title: "Tailwind CSS",
      icon: "./images/tailwindcss.svg",
      length:"40",
    },
    {
      title: "JavaScript",
      icon: "./images/javascript.svg",
      length:"40",
    },
    {
      title: "Swift",
      icon: "./images/swift.svg",
      length:"5",
    },
    {
      title: "PHP",
      icon: "./images/php.svg",
      length:"50",
    },
    {
      title: "Laravel",
      icon: "./images/laravel.svg",
      length:"30",
    },
    {
      title: "Node.js",
      icon: "./images/nodedotjs.svg",
      length:"8",
    },
    {
      title: "Vue.js",
      icon: "./images/vuedotjs.svg",
      length:"10",
    },
    {
      title: "Alpine.js",
      icon: "./images/alpinedotjs.svg",
      length:"10",
    },
    {
      title: "React.js",
      icon: "./images/react.svg",
      length:"2",
    },
    {
      title: "jQuery",
      icon: "./images/jquery.svg",
      length:"10",
    },
    {
      title: "GitHub",
      icon: "./images/github.svg",
      length:"25",
    },
    {
      title: "Photoshop",
      icon: "./images/adobephotoshop.svg",
      length:"10",
    },
    {
      title: "Illustrator",
      icon: "./images/adobeillustrator.svg",
      length:"10",
    },
    {
      title: "XD",
      icon: "./images/adobexd.svg",
      length:"75",
    },
    {
      title: "WordPress",
      icon: "./images/wordpress.svg",
      length:"30",
    },
    {
      title: "AWS",
      icon: "./images/amazonaws.svg",
      length:"10",
    },
    {
      title: "MySQL",
      icon: "./images/mysql.svg",
      length:"50",
    },

  ],
}));