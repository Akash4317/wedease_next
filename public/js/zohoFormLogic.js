// zohoFormLogic.js
export const initializeZohoForm = () => {
    // Validation function for email
    window.validateEmail991362000000561091 = function() {
      var form = document.forms['WebToLeads991362000000561091'];
      var emailFld = form.querySelectorAll('[ftype=email]');
      for (var i = 0; i < emailFld.length; i++) {
        var emailVal = emailFld[i].value.trim();
        if (emailVal.length != 0) {
          var atpos = emailVal.indexOf('@');
          var dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Please enter a valid email address.');
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    };
  
    window.checkMandatory991362000000561091 = function() {
      var mndFileds = ['First Name'];
      var fldLangVal = ['Full Name'];
      for (var i = 0; i < mndFileds.length; i++) {
        var fieldObj = document.forms['WebToLeads991362000000561091'][mndFileds[i]];
        if (fieldObj && fieldObj.value.trim().length == 0) {
          alert(fldLangVal[i] + ' cannot be empty.');
          fieldObj.focus();
          return false;
        }
      }
      if (!validateEmail991362000000561091()) {
        return false;
      }
      document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
      return true;
    };
  
    window.tooltipShow991362000000561091 = function(el) {
      var tooltip = el.nextElementSibling;
      var tooltipDisplay = tooltip.style.display;
      if (tooltipDisplay == 'none') {
        var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
        for (i = 0; i < allTooltip.length; i++) {
          allTooltip[i].style.display = 'none';
        }
        tooltip.style.display = 'block';
      } else {
        tooltip.style.display = 'none';
      }
    };
  
    const loadZohoAnalytics = () => {
      if (document.getElementById('wf_anal')) return;
  
      const script = document.createElement('script');
      script.id = 'wf_anal';
      script.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=d301117b24bbfbc104813c818d055f802796ff86e8e5eab011e1212ecff5acf2d2b6277aeb556f588314c25b727629a1gidee87e5d613256a1fe30cd4e8bed7037ce6de7e1e8f47566f137ef67e881a5415gidb7c6891ff6a1d55fe89bfd00fc89b0ad6b8cd47ec1ad253fe3d88bb0a9990dbegid327b20f603068b744facdde1760cc7709e35f2c0368a5ffe64073cb5325f327f&tw=7cf0e7d2f57bdee70b90a9dde6dc46611c143e47a102113d041ed67bfc9554c5';
      document.head.appendChild(script);
    };
  
    loadZohoAnalytics();
  
    return () => {
      if (window.validateEmail991362000000561091) {
        delete window.validateEmail991362000000561091;
      }
      if (window.checkMandatory991362000000561091) {
        delete window.checkMandatory991362000000561091;
      }
      if (window.tooltipShow991362000000561091) {
        delete window.tooltipShow991362000000561091;
      }
    };
  };