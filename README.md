This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

# ERPFlow - Technology Documentation

## Teknologi yang Digunakan

### 1. **Next.js 15.5.3**
**Alasan Pemilihan:**
- **Server-Side Rendering (SSR)**: Meningkatkan performa dan SEO
- **App Router**: Struktur routing yang lebih modern dan intuitif
- **Built-in Optimization**: Image optimization, code splitting, dan bundling otomatis
- **TypeScript Support**: Native TypeScript support untuk type safety
- **Developer Experience**: Hot reload, fast refresh, dan debugging tools yang excellent

### 2. **React 19.1.0**
**Alasan Pemilihan:**
- **Component-Based Architecture**: Memungkinkan pembuatan komponen yang reusable dan maintainable
- **Virtual DOM**: Performa rendering yang optimal
- **Hooks**: State management yang modern dan mudah digunakan
- **Ecosystem**: Library dan tools yang sangat luas
- **Community**: Dukungan komunitas yang besar dan aktif

### 3. **TypeScript 5**
**Alasan Pemilihan:**
- **Type Safety**: Mencegah runtime errors dengan compile-time checking
- **Better IDE Support**: Autocomplete, refactoring, dan error detection yang lebih baik
- **Maintainability**: Kode lebih mudah dipahami dan di-maintain
- **Documentation**: Types berfungsi sebagai dokumentasi yang hidup
- **Team Collaboration**: Memudahkan kolaborasi dalam tim

### 4. **Tailwind CSS 4**
**Alasan Pemilihan:**
- **Utility-First**: Styling yang konsisten dan predictable
- **Responsive Design**: Built-in responsive utilities
- **Performance**: CSS yang dioptimalkan dan kecil
- **Customization**: Mudah dikustomisasi sesuai kebutuhan
- **Developer Experience**: IntelliSense dan autocomplete yang excellent
- **Maintainability**: Styling yang terpusat dan mudah di-maintain

### 5. **Lucide React**
**Alasan Pemilihan:**
- **Consistent Design**: Icon set yang konsisten dan modern
- **Tree Shaking**: Hanya icon yang digunakan yang di-bundle
- **TypeScript Support**: Full TypeScript support
- **Customizable**: Mudah dikustomisasi (size, color, stroke)
- **Performance**: Lightweight dan optimized

### 6. **clsx & tailwind-merge**
**Alasan Pemilihan:**
- **Conditional Classes**: Memudahkan conditional styling
- **Class Merging**: Menggabungkan class Tailwind dengan benar
- **Type Safety**: TypeScript support untuk class names
- **Performance**: Optimized untuk production

### 7. **Biome**
**Alasan Pemilihan:**
- **All-in-One Tool**: Menggabungkan linter, formatter, dan bundler dalam satu tool
- **Performance**: Lebih cepat dari ESLint + Prettier kombinasi
- **Zero Configuration**: Bekerja out-of-the-box dengan konfigurasi minimal
- **TypeScript Support**: Native support untuk TypeScript dan JSX
- **Modern Rules**: Aturan linting yang modern dan up-to-date
- **Consistency**: Memastikan konsistensi kode di seluruh project
- **Developer Experience**: Error messages yang jelas dan actionable

### 8. **Husky**
**Alasan Pemilihan:**
- **Git Hooks**: Memudahkan setup Git hooks untuk code quality
- **Zero Configuration**: Setup yang mudah dan minimal
- **Cross-platform**: Bekerja di Windows, macOS, dan Linux
- **Team Consistency**: Memastikan semua developer menjalankan hooks yang sama
- **Pre-commit**: Mencegah commit kode yang tidak sesuai standar

### 9. **lint-staged**
**Alasan Pemilihan:**
- **Performance**: Hanya menjalankan linting pada file yang di-stage
- **Efficiency**: Menghemat waktu dengan tidak menjalankan linting pada seluruh project
- **Integration**: Terintegrasi dengan baik dengan Husky
- **Flexibility**: Konfigurasi yang fleksibel untuk berbagai file types
- **Developer Experience**: Memberikan feedback yang cepat dan relevan

## Arsitektur Aplikasi

### 1. **Modular Architecture**
```
src/
├── components/          # Reusable components
│   ├── ui/             # Base UI components (Button, Card, etc.)
│   ├── layout/         # Layout components (Navigation, Footer)
│   ├── sections/       # Page sections (Hero, About, Pricing, Contact)
│   └── modals/         # Modal components (LoginModal)
├── types/              # TypeScript type definitions
├── constants/          # Application constants
└── lib/               # Utility functions
```

### 3. **Component Design Patterns**

#### **Compound Components**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

#### **Render Props Pattern**
```tsx
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    // Implementation
  }
);
```

## Fitur-Fitur Website

### 1. **Hero Section**
- **Gradient Background**: Visual yang menarik dengan animasi
- **Call-to-Action**: Button untuk login dan get started
- **Mock Dashboard**: Preview fitur aplikasi
- **Statistics**: Social proof dengan angka-angka

### 2. **About Section**
- **Company Stats**: Statistik perusahaan
- **Features Grid**: Grid fitur-fitur utama
- **Mission Statement**: Misi dan nilai perusahaan

### 3. **Pricing Section**
- **Three Tiers**: Basic, Business, Entrepreneur
- **Feature Comparison**: Perbandingan fitur antar tier
- **Popular Badge**: Highlight untuk tier yang populer
- **CTA Buttons**: Call-to-action untuk setiap tier

### 4. **Contact Section**
- **Contact Form**: Form untuk mengirim pesan
- **Contact Information**: Informasi kontak perusahaan
- **Support Hours**: Jam operasional support

### 5. **Navigation**
- **Responsive Menu**: Menu yang responsive untuk mobile dan desktop
- **Smooth Scrolling**: Navigasi yang smooth antar section
- **Login Modal**: Modal untuk login

### 6. **Login Modal**
- **Form Validation**: Validasi form input
- **Demo Credentials**: Credentials untuk demo
- **Loading States**: State loading saat submit


## Development Workflow

### 1. **Git Workflow**
- Feature branches
- Pull request reviews
- Automated testing

### 2. **Code Quality**
- **Biome** untuk linting dan formatting (menggantikan ESLint + Prettier)
- **TypeScript** untuk type checking
- **Husky** untuk Git hooks
- **lint-staged** untuk pre-commit linting dan formatting
- **Custom Rules**: Konfigurasi khusus untuk mengabaikan aturan tertentu
  - `noUnknownAtRules`: Mengabaikan at-rule Tailwind CSS
  - `noArrayIndexKey`: Mengabaikan warning untuk array index sebagai key
  - `useUniqueElementIds`: Mengabaikan warning untuk duplicate IDs
  - `noUnusedImports`: Mengabaikan warning untuk unused imports
  - `noStaticElementInteractions`: Mengabaikan warning untuk static element interactions
  - `useKeyWithClickEvents`: Mengabaikan warning untuk click events tanpa keyboard support

#### **Pre-commit Hooks**
- **Automatic Linting**: Setiap commit akan otomatis menjalankan Biome lint
- **Automatic Formatting**: Setiap commit akan otomatis menjalankan Biome format
- **File Types**: Mendukung `.js`, `.jsx`, `.ts`, `.tsx`, `.json`, `.md`, `.css`
- **Staged Files Only**: Hanya file yang di-stage yang akan di-lint dan di-format

### 3. **Testing Strategy**
- Unit tests untuk utility functions
- Component tests untuk UI components
- Integration tests untuk user flows

## Deployment

### 1. **Build Process**
```bash
pnpm build
```

### 2. **Environment Variables**
- Production dan development configurations
- API endpoints
- Feature flags

### 3. **Performance Monitoring**
- Core Web Vitals monitoring
- Error tracking
- User analytics

## Future Enhancements

### 1. **Technical Improvements**
- Server-side rendering optimization
- Caching strategies
- CDN implementation

### 3. **Performance**
- Bundle size optimization
- Loading performance improvements
- SEO enhancements
