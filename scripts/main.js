"use strict";$(function(){function s(){a.closest(".sentence").find(".typed-cursor").hide(),o.slideDown("fast",e)}function e(){d.show(),r.typed({strings:["ls skills"],typeSpeed:50,startDelay:1e3,cursorChar:"|",callback:t})}function t(){r.closest(".sentence").find(".typed-cursor").hide(),$("#skills").slideDown("fast",function(){$("#skill-js").css("width","95%"),$("#skill-java").css("width","75%"),$("#skill-php").css("width","95%"),$("#skill-python").css("width","35%"),$("#skill-swift").css("width","35%"),$("#skill-nosql").css("width","85%"),$("#skill-sql").css("width","85%"),$("#skill-sysadmin").css("width","75%"),i()})}function i(){h.show(),f.typed({strings:["cat estudios"],typeSpeed:50,startDelay:1e3,cursorChar:"|",callback:c})}function c(){f.closest(".sentence").find(".typed-cursor").hide(),$("#certifications").slideDown("fast",n)}function n(){p.show(),u.typed({strings:["tail jobs"],typeSpeed:50,startDelay:1e3,cursorChar:"|",callback:l})}function l(){u.closest(".sentence").find(".typed-cursor").hide(),$("#experience").slideDown("fast",function(){})}var o=$("#whoami"),a=$("#whoami-command"),d=$(".sentence.skills"),r=$("#skills-command"),h=$(".sentence.certifications"),f=$("#certifications-command"),p=$(".sentence.experience"),u=$("#experience-command");a.typed({strings:["whoami"],typeSpeed:50,startDelay:2e3,cursorChar:"|",callback:function(){setTimeout(s,1e3)}})});