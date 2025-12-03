import Handlebars from 'handlebars';
import * as Pages from './pages';
import './helpers/handlebarsHelpers.ts';
import {
  loginInputs,
  profileRows,
  registrationInputs,
  profileChangeDataInputs,
  profileChangePasswordInputs,
} from "./configData.ts";

import authStyles from './pages/authPage/authPage.module.pcss';
import errorStyles from './pages/errorPage/errorPage.module.pcss';
import profileStyles from './pages/profilePage/profilePage.module.pcss';

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
import ProfileInput from './components/ProfileInput.ts';

Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Select', Select);
Handlebars.registerPartial('ErrorMessage', ErrorMessage);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Label', Label);
Handlebars.registerPartial('Footer', Footer);
Handlebars.registerPartial('FormInputs', FormInputs);
Handlebars.registerPartial('ProfileRow', ProfileRow);
Handlebars.registerPartial('ProfileInput', ProfileInput);

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
        styles: authStyles,
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
        styles: authStyles,
      });
    }
    if (this.state.currentPage === 'profilePage') {
      template = Handlebars.compile(Pages.ProfilePage);
      html = template({
        name: 'Иван',
        rows: profileRows,
        styles: profileStyles,
      });
    }
    if (this.state.currentPage === 'changeDataPage') {
      template = Handlebars.compile(Pages.ChangeDataPage);
      html = template({
        inputs: profileChangeDataInputs,
        buttonText: 'Сохранить',
        styles: profileStyles,
      });
    }
    if (this.state.currentPage === 'changePasswordPage') {
      template = Handlebars.compile(Pages.ChangeDataPage);
      html = template({
        inputs: profileChangePasswordInputs,
        buttonText: 'Сохранить',
        styles: profileStyles,
      });
    }
    if (this.state.currentPage === 'page500') {
      template = Handlebars.compile(Pages.ErrorPage);
      html = template({codeError: '500', message: 'Мы уже фиксим', styles: errorStyles});
    }
    if (this.state.currentPage === 'page400') {
      template = Handlebars.compile(Pages.ErrorPage);
      html = template({codeError: '400', message: 'Не туда попали', styles: errorStyles});
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

    const submit = document.querySelector('form');


    if (submit) {
      submit.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Форма отправлена без перезагрузки');
      });
    }
  }

  changePage(page: string) {
    this.state.currentPage = page;
    this.render();
  }
}
