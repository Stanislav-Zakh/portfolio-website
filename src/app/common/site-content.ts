export class SiteContent {

  public static project_cards = [

    {
      id: 1,
      name: "Audio Player",
      description:
        `Audio Player with minimalistic yet charming design. \n Includes basic functionallity of Audio Player such as: 
                    play, stop, duration and volume control, repeat or loop songs from the user library.
                    I have also added audio wave visualizer, responsive UI and ability to use custom user library.`,
      imageUrl: "player/Audio-Player-Main.png",
      technologies: "JavaFX, Jackson",
      code: "https://github.com/Stanislav-Zakh/Audio_Player.git"
    },
    {
      id: 2,
      name: 'E-Commerce Platfrom',
      description: `Full-stack e-commerce platform with Angular frontend, Spring Boot backend and MySQL database support. 
                          Platform consist of product selection, categories, search, cart, checkout and role-based access control for administrative tasks.`,
      imageUrl: 'ecommerce/E-Commerce-Main.png',
      technologies: `Angular, Spring Boot, Thymeleaf, Hibernate, MySQL, Spring Security, Spring Hateos, RESTful APIs, CRUD`,
      code: "https://github.com/Stanislav-Zakh/e-commerce-herbal-app.git"
    },
    {
      id: 3,
      name: 'The Diagram Builder: LampLight',
      description: `When working on larger projects it is beneficial to keep track of the project's top-level design, that is why I have created a tool to help me with this task.
      LampLight is a web-based diagram builder, designed to create aesthetically pleasing, readable, and customizable diagrams.`,
      imageUrl: 'diagram/Node-Types.png',
      technologies:`D3.js, SVG`,
      code: "https://github.com/Stanislav-Zakh/diagram-builder-lamplight.git"
    },
    {
      id: 4,
      name: 'To be added',
      description: 'Computer Vision model that detects type of the disease that affects the plant based on the image of a leaf.',
      imageUrl: 'empty/To-Be-Added.png',
      technologies: `TensorFlow (Python version), pandas, matplotlib, Convolutional Neural Nets.`,
      code: "#"
    },

    {
      id: 5,
      name: 'To be added',
      description: '',
      imageUrl: 'empty/To-Be-Added.png',
      technologies: `WPF`,
      code: "#"
    }

  ]

  public static project_description = [

    [
      {
        text:
          `Audio Player with a minimalistic yet charming design built mostly with JavaFX with a little help from Jackson to persist user settings.
          During the development process, we tried to adhere to the MVC design pattern standards to keep our code organized, maintainable, and easy to build upon.
          Application View is static and was created programmatically without using FXML.
          The controller manages most of the user interaction.
          The player includes basic functionality such as: play, stop, duration control, volume control, loop song, or play the next track in the library.
           `,
        images: {
          default_img: "player/Audio-Player-Main.png",
          ind: 0,
          total: 1,
          src_list: [
            "Audio-Player-Main.png",
          ]
        },
        alt: "Audio Player Main Interface",
        num: "",
        show: true
      },
      {
        text:
          `
          The UI is responsive. 
          The audio wave visualizer won't be displayed if the window is less than half of the user's screen. 
          On the first startup, the player will provide the default audio library, but users can set any directory as a library. 
          Users can create playlists by organizing related audio files into the directory. Auto Play functionality will first play all songs from a single playlist before moving to the next one. 
          The same logic will apply to deeper nesting, so you can create a playlist of playlists and so on. 
          `,
        images: {
          default_img: "player/Player-Small.png",
          ind: 0,
          total: 1,
          src_list: [
            "Player-Small.png",
          ]
        },
        alt: "Audio Player Main Interface",
        num: "reverse",
        show: true
      },
    ],
    [
      {
        text:
          `The main view of the platform consists of four components: a search bar, cart status, a left navigation menu, a product grid, and a footer. 
           The product grid supports pagination and contains responsive product cards that move, change color, and add shadow when hovered over. 
           The search bar allows users to search for products by keywords, while the left navigation menu helps in selecting products by the category to which they belong. 
           Products can be added to the cart, and the cart status icon on the top left of the screen will reflect the quantity and price of the products in the cart.`,
        images: {
          default_img: "ecommerce/E-Commerce-Main.png",
          ind: 0,
          total: 2,
          src_list: [
            "ecommerce/E-Commerce-Main.png", "ecommerce/E-Commerce-Detail.png"
          ]
        },
        alt: "E-Commerce Product Page.",
        num: "",
        show: true
      },
      {
        text:
          `When a user clicks on a product card in the grid, Angular will route them to a detailed product view.
           This component provides additional information such as description.
           Users can add the product to their cart from this component. 
           If they wish to go back, they can click on the link at the bottom of the page, which will take them back to the exact product grid page.`,
        images: {
          default_img: "ecommerce/E-Commerce-Detail.png",
          ind: 0,
          total: 1,
          src_list: [
            "ecommerce/E-Commerce-Detail.png"
          ]
        },
        alt: "E-Commerce Product Detils Page.",
        num: "reverse",
        show: true
      },
      {
        text:
          `Clicking the cart status icon will route user to the detailed view of the cart. 
           Here, the user can inspect, increase, decrease, or remove items from the cart before proceeding to the checkout page.`,
        images: {
          default_img: "ecommerce/E-Commerce-Cart.png",
          ind: 0,
          total: 1,
          src_list: [
            "ecommerce/E-Commerce-Cart.png"
          ]
        },
        alt: "E-Commerce Cart Details Page.",
        num: "",
        show: true
      },
      {
        text:
          `The platform includes an admin interface for editing the product database. 
          It is secured behind authentication and authorization implemented with the Spring Security API. 
          Users with passwords and administrative privileges can use this interface to add, edit, and remove products and product categories from the database 
          without any need to directly interact with the databases.`,
        images: {
          default_img: "ecommerce/E-Commerce-Admin-Edit.gif",
          ind: 0,
          total: 1,
          src_list: [
            "ecommerce/E-Commerce-Admin-Edit.gif"
          ]
        },
        alt: "E-Commerce Admin Interface.",
        num: "reverse",
        show: true
      },
    ],
    [
      {
        text:
          `
          Diagram builder: LampLight, relies on three key technologies: Angular, D3.js, and SVG.

          D3.js is essential for data binding and element lifecycle management, as well as the simulation of Force behavior.

          SVG, along with CSS, handles most of the graphics, including key elements such as the board and node selection menu.`,
        images: {
          default_img: "diagram/Intro-Large-Diag.png",
          ind: 0,
          total: 1,
          src_list: [
            "diagram/Intro-Large-Diag.png"
          ]
        },
        alt: "E-Commerce Cart Details Page.",
        num: "",
        show: true
      },
      {
        text:
          `User starts building diagram from the node selection menu. 
           Here user can select the initial node type and drop them on the desired location on the board.
           The board is where most of diagram building takes place and provides space where users can move, connect and customize nodes.
           The process of building a diagram involves several key features of the LampLight that we will discuss below.`,
        images: {
          default_img: "diagram/Node-Selection.gif",
          ind: 0,
          total: 1,
          src_list: [
            "diagram/Node-Selection.gif"
          ]
        },
        alt: "E-Commerce Cart Details Page.",
        num: "reverse",
        show: true
      },
      {
        text:
          `Current snapshot of the LampLight includes three key elements that users can use to build diagrams, they are Nodes, Links, and Text.
           It does not sound as much but each element is highly customizable, which provides enough functionality to create highly readable diagrams.
           Let's take Nodes as an example: Users can change node's shape, size, rotation, and colour, which can significantly alter node's appearance and make them visually distinct.`,
        images: {
          default_img: "diagram/Node-Types.png",
          ind: 0,
          total: 2,
          src_list: [
            "diagram/Node-Types.png", "diagram/Node-Types.gif"
          ]
        },
        alt: "E-Commerce Cart Details Page.",
        num: "",
        show: true
      },
      {
        text:
          `Link is the second major element on the board. It has the lowest rendering priority, so it is always displayed below nodes and text. Users can connect two (or more!) nodes by first selecting them with a left mouse click and then connecting them through the context menu.`,
        images: {
          default_img: "diagram/Link-Items-Single.gif",
          ind: 0,
          total: 2,
          src_list: [
            "diagram/Link-Items-Single.gif", "diagram/Link-Items-Multi.gif"
          ]
        },
        alt: "E-Commerce Cart Details Page.",
        num: "reverse",
        show: true
      },
      {
        text:
          `Just like nodes, links can be customized to stand out among other elements. 
          Users can add and reverse directional arrows, and the shape and color of the link can also be altered. 
          Additionally, the type of link can be changed, affecting how the link behaves when a user interacts with it. 
          Currently, there are two different types of links: curve and line.`,
        images: {
          default_img: "diagram/Link-Customization.gif",
          ind: 0,
          total: 1,
          src_list: [
            "diagram/Link-Customization.gif",
          ]
        },
        alt: "E-Commerce Cart Details Page.",
        num: "",
        show: true
      },
      {
        text:
          `Users can use text nodes to add context to the diagram. 
          Text nodes are treated similarly to any other nodes, except they have a higher render priority, so that text could be always displayed on top of any other node. 
          Similar to the other elements, Text appearance can be customized. Users can change text size, colour, and font.`,
        images: {
          default_img: "diagram/add-text.gif",
          ind: 0,
          total: 1,
          src_list: [
            "diagram/add-text.gif"
          ]
        },
        alt: "E-Commerce Cart Details Page.",
        num: "reverse",
        show: true
      },

    ]


  ]
}

