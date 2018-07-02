sap.ui.require.preload({
	"openui5/smartmockserver/library.js": "sap.ui.define([],function(){\"use strict\";return sap.ui.getCore().initLibrary({name:\"openui5.smartmockserver\",dependencies:[\"sap.ui.core\"],controls:[\"openui5.smartmockserver.SmartMockServer\"],noLibraryCSS:!0,version:\"${version}\"})});",
	"openui5/smartmockserver/SmartMockServer.js": "sap.ui.define([\"jquery.sap.global\",\"sap/ui/core/util/MockServer\",\"./thirdparty/faker.min\"],function(t,e){\"use strict\";const a=e;return a.prototype._generateDataFromEntityOriginal=a.prototype._generateDataFromEntity,a.prototype.SAP_SEMANTICS_TO_FAKER_METHOD_MAPPING=[{sapSemantics:\"city\",fakerMethod:\"address.city\"},{sapSemantics:\"country\",fakerMethod:\"address.country\"},{sapSemantics:\"geo-lat\",fakerMethod:\"address.latitude\"},{sapSemantics:\"geo-lon\",fakerMethod:\"address.longitude\"},{sapSemantics:\"region\",fakerMethod:\"address.state\"},{sapSemantics:\"street\",fakerMethod:\"address.streetAddress\"},{sapSemantics:\"zip\",fakerMethod:\"address.zipCode\"},{sapSemantics:\"org\",fakerMethod:\"company.companyName\"},{sapSemantics:\"currency-code\",fakerMethod:\"finance.currencyCode\"},{sapSemantics:\"photo\",fakerMethod:\"image.avatar\"},{sapSemantics:\"bcc\",fakerMethod:\"internet.email\"},{sapSemantics:\"cc\",fakerMethod:\"internet.email\"},{sapSemantics:\"email\",fakerMethod:\"internet.email\"},{sapSemantics:\"from\",fakerMethod:\"internet.email\"},{sapSemantics:\"sender\",fakerMethod:\"internet.email\"},{sapSemantics:\"to\",fakerMethod:\"internet.email\"},{sapSemantics:\"url\",fakerMethod:\"internet.url\"},{sapSemantics:\"body\",fakerMethod:\"lorem.paragraphs\"},{sapSemantics:\"subject\",fakerMethod:\"lorem.sentence\"},{sapSemantics:\"name\",fakerMethod:\"name.findName\"},{sapSemantics:\"givenname\",fakerMethod:\"name.firstName\"},{sapSemantics:\"middlename\",fakerMethod:\"name.firstName\"},{sapSemantics:\"title\",fakerMethod:\"name.jobTitle\"},{sapSemantics:\"familyname\",fakerMethod:\"name.lastName\"},{sapSemantics:\"honorific\",fakerMethod:\"name.prefix\"},{sapSemantics:\"suffix\",fakerMethod:\"name.suffix\"},{sapSemantics:\"tel\",fakerMethod:\"phone.phoneNumber\"}],a.prototype._generateDataFromEntity=function(t,e,r){let n=a.prototype._generateDataFromEntityOriginal.apply(this,arguments);return this._generateDataWithSmartRules(t.name,n)},a.prototype._generateDataWithSmartRules=function(e,a){this._smartRules||(this._smartRules=[]);let r=t.extend(!0,{},a);return r=this._generateDataFromEntityWithSapSemanticsAnnotations(e,r),r=this._generateDataFromEntityWithSmartRules(e,r)},a.prototype._generateDataFromEntityWithSmartRules=function(e,a){try{if(this._hasSmartRulesEntity(e)){const r=t.extend(!0,{},a);return Object.keys(r).forEach(function(t){this._hasSmartRulesEntityProperty(e,t)&&(r[t]=this._generatePropertyValueWithSmartRules(e,t))}.bind(this)),r}}catch(e){t.sap.log.error(e)}return a},a.prototype._generateDataFromEntityWithSapSemanticsAnnotations=function(e,a){try{const r='EntityType[Name=\"'+e+'\"]',n=\"Property[sap\\\\:semantics]\",s=t(this._oMetadata).find(r).find(n);if(s&&s.length&&s.length>0){const e=t.extend(!0,{},a);return s.each(function(a,r){const n=t(r),s=this._getFakerMethodFromSapSemantics(n.attr(\"sap:semantics\"));s&&(e[n.attr(\"Name\")]=this._callFakerMethod(s))}.bind(this)),e}}catch(e){t.sap.log.error(e)}return a},a.prototype._getFakerMethodFromSapSemantics=function(t){const e=this.SAP_SEMANTICS_TO_FAKER_METHOD_MAPPING.find(function(e){return e.sapSemantics===t});return e?e.fakerMethod:e},a.prototype._generatePropertyValueWithSmartRules=function(t,e){const a=this._getSmartRulesEntityProperty(t,e);return this._callFakerMethod(a.fakerMethod)},a.prototype._callFakerMethod=function(t){return faker.fake(\"{{\"+t+\"}}\")},a.prototype._getSmartRulesEntity=function(t){return this._smartRules.find(function(e){return e.entityName===t})},a.prototype._getSmartRulesEntityProperty=function(t,e){const a=this._getSmartRulesEntity(t);return a?a.properties.find(function(t){return t.name===e}):a},a.prototype._hasSmartRulesEntity=function(t){return!!this._getSmartRulesEntity(t)},a.prototype._hasSmartRulesEntityProperty=function(t,e){return!!this._getSmartRulesEntityProperty(t,e)},a.prototype.setSmartRules=function(t){this._smartRules=t||[]},a});",
}, "openui5/smartmockserver/library-preload");