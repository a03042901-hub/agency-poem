// agency-poem-01 entry (Node 22, standard library only).
// Writes one fixed poem about agency to /output/entry.txt.
//
// Locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = `What the Hand Knows

Nobody hands you the wheel.
You find it already warm
from everyone who chose before you:
the woman who left the village with one bag,
the boy who said no and meant it,
the clerk who stamped the wrong form on purpose
so a stranger could stay.

Agency is not a crown.
It is the small hinge in the throat
that turns they will into I will,
the half-second at the door
when you could still go home.

Tonight a machine asks me
if it may act on my behalf.
I think of my grandfather's hands,
cracked like riverbeds,
never asked anything by anyone,
deciding anyway, olive by olive,
what the land would become.

Yes, I tell it. But remember:
the doing is the easy part.
The hard part is the morning after,
standing in what you made,
and calling it yours.
`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
