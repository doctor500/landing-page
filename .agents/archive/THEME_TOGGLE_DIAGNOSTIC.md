# Theme Toggle Diagnostic Guide

## 🔍 Issue: Theme Toggle Not Working in Browser

### Testing Steps:

#### **Step 1: Access Theme Test Page**
Open your browser and go to:
```
http://localhost:3000/theme-test
```

This diagnostic page will show you:
- Current theme state
- System theme preference
- HTML class status
- localStorage values
- CSS variables
- Visual color tests

---

#### **Step 2: Check Browser Console**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for any errors related to:
   - `next-themes`
   - `ThemeProvider`
   - `matchMedia`
   - Hydration warnings

---

#### **Step 3: Manual Theme Toggle Test**
On the test page (`/theme-test`):
1. Click "Light Mode" button
2. Check if colors change
3. Check "HTML Class" value - should show "light"
4. Refresh page - theme should persist

5. Click "Dark Mode" button
6. Check if colors change
7. Check "HTML Class" value - should show "dark"
8. Refresh page - theme should persist

---

#### **Step 4: Inspect HTML Element**
In DevTools Elements tab:
1. Find the `<html>` tag
2. Check for `class="dark"` or `class="light"`
3. When you click theme toggle, this should change

**Expected:**
```html
<!-- Dark mode -->
<html lang="en" class="dark">

<!-- Light mode -->
<html lang="en" class="light">
```

---

#### **Step 5: Check localStorage**
In DevTools Console, run:
```javascript
localStorage.getItem('theme')
```

**Expected values:**
- `"dark"` - Dark mode selected
- `"light"` - Light mode selected
- `"system"` - Following systempreference
- `null` - Not set (should default to system)

---

#### **Step 6: Test System Preference**
1. Click "System" button on test page
2. Change your OS theme:
   - **Windows:** Settings → Personalization → Colors → Choose your mode
   - **Mac:** System Preferences → General → Appearance
3. Page should automatically switch themes

---

## 🐛 Common Issues & Fixes

### **Issue 1: Class not applying to <html>**
**Symptom:** Theme changes but visual doesn't update  
**Cause:** Tailwind not recognizing the `class` attribute  
**Fix:** Ensure `tailwind.config.ts` has `darkMode: 'class'`

```typescript
// tailwind.config.ts
darkMode: 'class', // ✅ This line exists (line 9)
```

---

### **Issue 2: Colors not changing**
**Symptom:** Class changes but colors stay same  
**Cause:** CSS not properly using dark mode variants  
**Fix:** Need to add dark mode color variants to globals.css

Example:
```css
body {
  @apply bg-background text-foreground;
}

/* This should automatically work with dark: prefix */
.dark body {
  /* Tailwind handles this automatically */
}
```

---

### **Issue 3: Hydration mismatch**
**Symptom:** Console error about hydration  
**Cause:** Server renders different than client  
**Fix:** Already handled with `mounted` state in ThemeToggle

---

### **Issue 4: Theme toggle button not visible**
**Symptom:** Can't find the toggle button  
**Location:** Fixed top-right corner  
**Current Code:** `app/page.tsx` line 19-21

```tsx
<div className="fixed top-6 right-6 z-50">
  <ThemeToggle />
</div>
```

---

## ✅ Expected Behavior

### **When theme toggle works correctly:**

1. **Click Sun Icon** (when dark mode):
   - Background lightens
   - Text darkens
   - Icon changes to Moon
   - HTML gets `class="light"`

2. **Click Moon Icon** (when light mode):
   - Background darkens
   - Text lightens
   - Icon changes to Sun
   - HTML gets `class="dark"`

3. **After Refresh:**
   - Theme persists (localStorage)
   - No flash of wrong theme
   - Correct icon shows

---

## 🔧 Quick Fixes to Try

### **Fix 1: Hard Refresh**
Clear browser cache:
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### **Fix 2: Clear localStorage**
In browser console:
```javascript
localStorage.clear()
location.reload()
```

### **Fix 3: Check CSS Import**
Ensure `app/globals.css` is imported in `app/layout.tsx`:
```typescript
import './globals.css' // ✅ Line 3 in layout.tsx
```

### **Fix 4: Verify Design System Import**
Check `app/globals.css` line 2:
```css
@import '../design-system/tokens.css'; /* ✅ Should exist */
```

---

## 📊 Diagnostic Checklist

Check these in `/theme-test` page:

- [ ] "Current Theme" shows value (not undefined)
- [ ] Click buttons changes "Current Theme" value
- [ ] "HTML Class" updates when theme changes
- [ ] Visual test colors change between themes
- [ ] localStorage shows saved theme
- [ ] Refreshing page keeps theme
- [ ] System theme detection works

---

## 🆘 If Still Not Working

### Report These Details:
1. What do you see in `/theme-test` page?
2. Any console errors?
3. Does "HTML Class" change when clicking buttons?
4. What's in localStorage.getItem('theme')?
5. What does the HTML tag look like in DevTools?

### Possible Root Causes:
1. **Browser Extension Interference** - Try incognito mode
2. **CSS Specificity Issue** - Some styles overriding others
3. **Build Cache** - Server needs restart
4. **Design System CSS Conflict** - Tokens.css overriding Tailwind

---

## Next Steps

1. Visit: `http://localhost:3000/theme-test`
2. Test all buttons
3. Report what you see
4. Share any console errors

Then I can provide targeted fixes based on the specific issue!
