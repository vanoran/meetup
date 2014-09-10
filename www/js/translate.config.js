angular.module('translations', ['pascalprecht.translate'])

.config(function($translateProvider) {
  $translateProvider.translations('es', {
    MONDAY: 'Lunes',
    TUESDAY: 'Martes',
    WEDNESDAY: 'Miércoles',
    THURSDAY: 'Jueves',
    FRIDAY: 'Viernes',
    SATURDAY: 'Sabado',
    SUNDAY: 'Domingo',
    MORNING: 'Mañana',
    NOON: 'Mediodía',
    AFTERNOON: 'Tarde',
    NIGHT: 'Noche'
  });
  $translateProvider.preferredLanguage('es');
});