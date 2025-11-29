import Handlebars from 'handlebars';
import * as Pages from './pages';
import './helpers/handlebarsHelpers.ts';

// Register partials
import Input from './components/Input.ts';
import Button from './components/Button.ts';
import Select from './components/Select.ts';
import ErrorMessage from './components/ErrorMessage.ts';
import Link from './components/Link.ts';
import Label from './components/Label.ts';
import Footer from './components/Footer.ts';

Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Select', Select);
Handlebars.registerPartial('ErrorMessage', ErrorMessage);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Label', Label);
Handlebars.registerPartial('Footer', Footer);

export default class App {
  private state: { questions: string[]; answers: string[]; currentPage: string };
  private appElement: any;

  constructor() {
    this.state = {
      currentPage: 'loginPage',
      questions: [],
      answers: [],
    };
    this.appElement = document.getElementById('app');
  }

  render() {
    let template, html;
    if (this.state.currentPage === 'loginPage') {
      template = Handlebars.compile(Pages.LoginPage);
      html = template({});
    }
    if (this.state.currentPage === 'page500') {
      template = Handlebars.compile(Pages.ErrorPage);
      html = template({codeError: '500', message: 'Мы уже фиксим'});
    }
    if (this.state.currentPage === 'page400') {
      template = Handlebars.compile(Pages.ErrorPage);
      html = template({codeError: '400', message: 'Не туда попали'});
    }

    this.appElement.textContent = '';
    this.appElement.insertAdjacentHTML('beforeend', html);
    this.attachEventListeners();
  }

  attachEventListeners() {
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
      link.addEventListener('click', (e: any) => {
        e.preventDefault();
        this.changePage(e.target.dataset.page);
      });
    });
  }

  changePage(page: string) {
    this.state.currentPage = page;
    this.render();
  }
}
