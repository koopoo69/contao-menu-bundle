<?php

namespace HeimrichHannot\MenuBundle\ContaoManager;


use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Config\ConfigInterface;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;
use Contao\ManagerPlugin\Config\ConfigPluginInterface;
use HeimrichHannot\MenuBundle\ContaoMenuBundle;
use HeimrichHannot\UtilsBundle\HeimrichHannotContaoUtilsBundle;
use Symfony\Component\Config\Loader\LoaderInterface;

class Plugin implements BundlePluginInterface, ConfigPluginInterface
{

    /**
     * Gets a list of autoload configurations for this bundle.
     *
     * @return ConfigInterface[]
     */
    public function getBundles(ParserInterface $parser)
    {
        $loadAfter = [
            HeimrichHannotContaoUtilsBundle::class,
            ContaoCoreBundle::class
        ];

        if (class_exists('HeimrichHannot\EventsBundle\HeimrichHannotContaoEventsBundle')) {
            $loadAfter[] = \HeimrichHannot\EventsBundle\HeimrichHannotContaoEventsBundle::class;
        }

        if (class_exists('HeimrichHannot\EventRegistrationBundle\ContaoEventRegistrationBundle')) {
            $loadAfter[] = \HeimrichHannot\EventRegistrationBundle\ContaoEventRegistrationBundle::class;
        }

        return [BundleConfig::create(ContaoMenuBundle::class)->setLoadAfter($loadAfter)];
    }

    /**
     * Allows a plugin to load container configuration.
     */
    public function registerContainerConfiguration(LoaderInterface $loader, array $managerConfig)
    {
//        $loader->load('@ContaoMenuBundle/Resources/config/datacontainers.yml');
//        $loader->load('@ContaoMenuBundle/Resources/config/services.yml');
//        $loader->load('@ContaoMenuBundle/Resources/config/workflow.yml');
//        $loader->load('@ContaoMenuBundle/Resources/config/listeners.yml');
    }
}