import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedinIn);
library.add(faInstagram);
library.add(faGooglePlusG);
library.add(faLock);
library.add(faPinterest);
library.add(faStar);
library.add(faShoppingBasket);
library.add(faArrowRight);
library.add(faArrowLeft);
library.add(faEnvelope);
library.add(faCaretDown);

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
