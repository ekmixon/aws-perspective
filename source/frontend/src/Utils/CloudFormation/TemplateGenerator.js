import { requestWrapper, sendGetRequest } from '../../API/APIHandler';
import { processTemplate } from '../../API/APIProcessors';

import {
  uploadTemplate,
  generatePreSignedURL,
} from '../../API/Storage/S3Store';

var hash = require('object-hash');

const downloadTemplate = (command) => {
  const query = {
    command: `?command=${command}`,
    processor: processTemplate,
  };

  return requestWrapper(sendGetRequest, query);
};

export function downloadCloudFormationTemplateForAccount() {
  return downloadTemplate('downloadAccountCloudFormation')
    .then(template => (template.body))
}

export function downloadCloudFormationTemplateForRegion() {
  return downloadTemplate('downloadRegionCloudFormation')
    .then(template => (template.body))
}

export function uploadCloudFormationTemplateForAccount() {
  let templateName;
  return downloadTemplate('downloadAccountCloudFormation')
    .then((template) => {
      templateName = hash(template.body);
      uploadTemplate(
        `cfn/import-templates/accounts/${templateName}.template`,
        template.body,
        'text/yaml'
      );
    })
    .then(() => {
      return generatePreSignedURL(
        `cfn/import-templates/accounts/${templateName}.template`,
        3600
      ).then((url) => url);
    });
}

export function uploadCloudFormationTemplateForRegion() {
  let templateName;
  return downloadTemplate('downloadRegionCloudFormation')
    .then((template) => {
      templateName = hash(template.body);
      uploadTemplate(
        `cfn/import-templates/regions/${templateName}.template`,
        template.body,
        'text/yaml'
      );
    })
    .then(() => {
      return generatePreSignedURL(
        `cfn/import-templates/regions/${templateName}.template`,
        3600
      ).then((url) => url);
    });
}

export function getTemplate(template) {
  return downloadTemplate(template);
}
