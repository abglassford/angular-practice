(function() {
  'use strict';

  const app = angular.module('FamilyApp')

  app.controller('FamilyController', FamilyController);
  app.controller('RoleController', RoleController);

  function FamilyController ($rootScope) {
    this.person = {
      name: '',
      role: ''
    }

    this.people = [{
      name: 'Marge Simpson',
      role: 'Mother'
    }, {
      name: 'Bart Simpson',
      role: 'Son'
    }]

    this.addPerson = function (name, role) {
      this.people.push(this.person)
      $rootScope.allRoles += `, ${this.person.role}`
      $rootScope.roleCounter += 1
      this.person = {
        name: '',
        role: ''
      }
    }
  }

  function RoleController ($rootScope) {
    $rootScope.allRoles = 'Mother, Son';
    $rootScope.roleCounter = 2

  }


}());
