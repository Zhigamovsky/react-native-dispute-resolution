import { NavigationTree } from "../types/navigation";

export const NavTree: NavigationTree = {
  Root: {
    AuthorizatinRudiment: {
      title: 'Root',
      path: 'root',
      type: 'stack'
    }
  },
  AuthorizationBranch: {
    SwitcherFetus: {
      title: '',
      path: 'root-switcher-screen'
    },
    AuthorizationFetus: {
      title: 'Авторизация',
      path: 'root-authorization-screen'
    },
    RegistrationFetus: {
      title: 'Регистрация',
      path: 'root-registration-screen'
    },
    DrawerRudiment: {
      title: '',
      path: 'root-drawer-rudiment'
    }
  },
  DrawerBranch: {
    GeneralStackRudiment: {
      title: 'Главная',
      path: 'drawer-general-screen'
    },
    FriendsStackRudiment: {
      title: 'Мои друзья',
      path: 'drawer-friends-screen'
    },
    HelpStackRudiment: {
      title: 'Помощь',
      path: 'drawer-help-screen'
    }
  }
}