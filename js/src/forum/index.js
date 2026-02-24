import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Button from 'flarum/common/components/Button';
import classList from 'flarum/common/utils/classList';
const packagePrefix = 'datlechin-signup-button.';
const translationPrefix = packagePrefix + 'forum.';

app.initializers.add('datlechin/flarum-signup-button', () => {
  extend('flarum/forum/components/IndexSidebar', 'items', function (items) {
    const classes = classList('Button', 'Button--primary', 'SignUpButton');

    if (app.session.user !== null) return;

    items.add(
      'signupButton',
      Button.component(
        {
          className: classes,
          onclick: () => app.modal.show(() => import('flarum/forum/components/SignUpModal')),
        },
        app.translator.trans(translationPrefix + 'sign_up')
      ),
      100
    );
  });
});
