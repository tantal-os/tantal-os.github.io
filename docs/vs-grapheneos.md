# How we differ from GrapheneOS on security

Tantal is based on GrapheneOS and is not affiliated with the GrapheneOS project. Protection against outside attacks stays at the level of the regular GrapheneOS release channel. Below is everything where we are weaker, without softening.

## Update delay

Our release ships after the GrapheneOS release, and we don't promise a deadline yet. Until it ships, a known vulnerability is fixed there but not here.

## No security preview channel

Embargoed patches from the GrapheneOS security preview channel are not available to us until the sources are published.

## microG

If you enable microG, the system spoofs the Google signature for it. microG does not perform the same checks as Google Play services, so apps that rely on them get weaker protection. microG is off by default.

## Titanium

An extension with access to all sites sees everything you do on them. Titanium updates depend on a third-party developer. Banking and other sensitive sites are better opened in Vanadium.

## Our privileged components

The list will appear with the first features. Each item will link to the [decision log](/decisions/).
