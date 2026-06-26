# B PRSNL Webby — 17.0 Architecture Wrap-Up / Developer Hardlocks

## Project philosophy

B PRSNL Webby is not a traditional resume website. It is a premium software engineering experience that simultaneously demonstrates frontend engineering, full-stack architecture, modern UI/UX, animation engineering, software quality, and professional branding.

Every implementation decision should reinforce those goals.

## Design hierarchy

1. Professional readability.
2. Premium frontend presentation.
3. Modern interactions.
4. Advanced animations.

Animations must never reduce usability.

## Animation rules

Animations should:

- Feel purposeful.
- Support content.
- Guide attention.
- Create depth.

Animations should never:

- Distract from content.
- Become repetitive.
- Reduce readability.
- Impact scrolling performance.

## Liquid-glass rules

Glass effects should be used selectively. Do not place every component inside a glass card.

Sunny Patel-inspired open content layouts remain the primary content-layout inspiration. Glass containers are secondary visual accents used to emphasize high-value surfaces, not the default container for every section.

## Performance rules

Maintain 60 FPS where practical.

Avoid:

- Unnecessary re-renders.
- Expensive blur layers.
- Large shadow stacks.
- Unnecessary animation loops.

Canvas and WebGL effects should always be isolated from the primary content rendering path.

## Responsive rules

- Desktop is the primary showcase.
- Laptop must remain premium.
- Tablet should preserve hierarchy.
- Mobile should simplify interactions while preserving identity.

Do not force desktop animations onto mobile devices.

## Accessibility rules

Always support:

- Keyboard navigation.
- Focus visibility.
- Reduced motion.
- Readable contrast.

Accessibility should not be sacrificed for aesthetics.

## Future expansion

The architecture should allow future additions without major architectural changes, including:

- Blog.
- Case studies.
- Speaking.
- Media.
- Downloadable resume.
- Dark/light themes.
- CMS integration.
- Analytics.
- Mobile companion app.
- Multilingual support.

## Quality standard

Every section should be evaluated against one question:

> Would this immediately convince a recruiter, engineering manager, technical founder, or client that this website was built by an experienced frontend and full-stack engineer?

If the answer is no, the implementation should be refined before being considered complete.

## Completion criteria

The website should represent B Cisse, Full-Stack Software Engineer, through exceptional engineering quality, not through excessive visual effects.
