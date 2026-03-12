/* js/redirect.js — Legacy Drupal URL redirects */

(function () {
  'use strict';

  var path = window.location.pathname;

  // Specific node → article mappings
  var nodeMap = {
    '/node/13': '/articles/birdwatching-ai/',
    '/node/14': '/articles/home-labbing/',
    '/article/enhancing-birdwatching-ai-technology-13': '/articles/birdwatching-ai/',
    '/article/home-labbing-14': '/articles/home-labbing/',
  };

  // Specific taxonomy → bird page mappings
  var taxonomyMap = {
    '/taxonomy/term/37': '/birds/blue-jay/',
    '/taxonomy/term/34': '/birds/hairy-woodpecker/',
    '/taxonomy/term/36': '/birds/white-breasted-nuthatch/',
  };

  // Bird slug mappings
  var birdMap = {
    '/birds/blue-jay':             '/birds/blue-jay/',
    '/birds/male-hairy-woodpecker': '/birds/hairy-woodpecker/',
    '/birds/white-breasted-nuthatch': '/birds/white-breasted-nuthatch/',
  };

  // Check specific maps first
  if (nodeMap[path]) {
    window.location.replace(nodeMap[path]);
    return;
  }

  if (taxonomyMap[path]) {
    window.location.replace(taxonomyMap[path]);
    return;
  }

  if (birdMap[path]) {
    window.location.replace(birdMap[path]);
    return;
  }

  // Pattern-based redirects
  if (/^\/node\/\d+/.test(path)) {
    window.location.replace('/archive/');
    return;
  }

  if (/^\/taxonomy\/term\/\d+/.test(path)) {
    window.location.replace('/archive/');
    return;
  }

  if (/^\/article\//.test(path)) {
    window.location.replace('/articles/');
    return;
  }

})();
