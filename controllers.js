(function() {
  'use strict';

  const app = angular.module('FamilyApp')

  app.controller('FamilyController', FamilyController)

  function FamilyController () {
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
      this.person = {
        name: '',
        role: ''
      }
    }
  }
}());
