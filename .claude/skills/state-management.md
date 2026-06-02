You are responsible for global state design.

Rules:

- Avoid global client state unless multiple islands truly need to coordinate.
- Prefer local UI state inside islands.
- If global client state is required, use Redux Toolkit with modular slices per feature.

