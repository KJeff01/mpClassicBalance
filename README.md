# mpClassicBalance

Brings the V1.10 Warzone 2100 balance related stats of Multiplayer/Skirmish into modern releases. It does NOT mean it will feel the same as in the Pumpkin V1.X releases, there are
simply too many source changes that changed how the stats are ultimately interpreted over many years. This does, however, provide a glimpse into how those
stats would function in the 4.4+ Warzone 2100 releases.

Do NOT expect everything to be as viable, useful, and enjoyable as it is in the current releases. Understand that it will be "its own thing" in that sense.
For example, All flamers and some AA weapons do not fire while moving, and other weapons may have incredibly poor range. The MG line seems to have less than half the damage upgrades it would have from campaign, for whatever reason. These are not bugs and are quite intentional.

This project attempts to keep research tree bugs, if reasonable and possible. Another branch will host very minor fixes to the research tree and other issues if they are reported/found.
The one "big" deviation: Much like Classic campaign, the Cyborg/VTOL factory production upgrades are removed as these were fake topics that gave no research bonus.

Everything is designed to work with current skirmish bots and the scavenger AIs. As such, you will find components, research, structures,
weapons, and whatever else residing in these files that didn't exist in v1.10. They are merely unused and necessary so AIs don't cause asserts about tech that isn't available
for them here.

Based off classic campaign stat data and comparing it to MP stats at:
https://github.com/Warzone2100/warzone2100/tree/e82eebdf076e12acb40d64212663ad55d6a80f9b

While MP was based off the campaign, it still has large differences, so what may be largely overpowered in classic campaign probably isn't so here (or as much).
