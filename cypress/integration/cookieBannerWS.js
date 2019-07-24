import { worldServiceCookieBannerTranslations } from '../support/bodyTestHelper';
import describeForEuOnly from '../support/describeForEuOnly';
import { describeForLocalAndTest } from '../support/limitEnvRuns';
import services from '../../src/app/lib/config/services';

Object.keys(services).forEach(index => {
  const serviceConfig = services[index];
  const service = index;

  // This should be unhacked when this file is consolidated with other cookie testing files.
  if (
    // Not WS
    service === 'news' ||
    service === 'cymrufyw' ||
    service === 'naidheachdan' ||
    // Not on test.bbc.com yet
    service === 'serbian' ||
    service === 'telugu' ||
    service === 'ukchina' ||
    service === 'zhongwen' ||
    // Not a service
    service === 'default'
  ) {
    return;
  }

  describeForLocalAndTest('World Service Cookie banner Translations', () => {
    describe('Canonical', () => {
      it(`should load the relevant translations for ${service}`, () => {
        worldServiceCookieBannerTranslations(
          `${serviceConfig.translations.consentBanner.privacy.title}`,
          `${serviceConfig.translations.consentBanner.cookie.title}`,
          `/${service}`,
          `${serviceConfig.translations.consentBanner.privacy.accept}`,
          `${serviceConfig.translations.consentBanner.cookie.accept}`,
        );
      });
    });

    describeForEuOnly('AMP', () => {
      it(`should load the relevant translations for ${service}`, () => {
        worldServiceCookieBannerTranslations(
          `${serviceConfig.translations.consentBanner.privacy.title}`,
          `${serviceConfig.translations.consentBanner.cookie.title}`,
          `/${service}`,
          `${serviceConfig.translations.consentBanner.privacy.accept}`,
          `${serviceConfig.translations.consentBanner.cookie.accept}`,
        );
      });
    });
  });
});
