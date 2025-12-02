import Handlebars from 'handlebars';
import * as Pages from './pages';
import './helpers/handlebarsHelpers.ts';
import {loginInputs, profileRows, registrationInputs} from "./configData.ts";

// Register partials
import Input from './components/Input.ts';
import Button from './components/Button.ts';
import Select from './components/Select.ts';
import ErrorMessage from './components/ErrorMessage.ts';
import Link from './components/Link.ts';
import Label from './components/Label.ts';
import Footer from './components/Footer.ts';
import FormInputs from './components/FormInputs.ts';
import ProfileRow from './components/ProfileRow.ts';

Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Select', Select);
Handlebars.registerPartial('ErrorMessage', ErrorMessage);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Label', Label);
Handlebars.registerPartial('Footer', Footer);
Handlebars.registerPartial('FormInputs', FormInputs);
Handlebars.registerPartial('ProfileRow', ProfileRow);

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
      template = Handlebars.compile(Pages.AuthPage);
      html = template({
        title: 'Вход',
        inputs: loginInputs,
        buttonId: 'submit-login',
        buttonText: 'Авторизоваться',
        linkDataPage: 'registrationPage',
        linkText: 'Нет аккаунта?',
      });
    }
    if (this.state.currentPage === 'registrationPage') {
      template = Handlebars.compile(Pages.AuthPage);
      html = template({
        title: 'Регистрация',
        inputs: registrationInputs,
        buttonId: 'submit-sign-up',
        buttonText: 'Зарегистрироваться',
        linkDataPage: 'loginPage',
        linkText: 'Войти',
      });
    }
    if (this.state.currentPage === 'profilePage') {
      template = Handlebars.compile(Pages.ProfilePage);
      html = template({
        name: 'Иван',
        rows: profileRows,
      });
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
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
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
