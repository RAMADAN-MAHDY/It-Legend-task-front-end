## 1. تصميم الهيكلية
```mermaid
graph TD
    subgraph "Frontend Layer (Next.js App Router)"
        A["Pages (App Dir)"]
        B["Components (UI/Layout/Features)"]
        C["Hooks & Context"]
    end
    subgraph "Data Layer"
        D["Mock Data (src/data)"]
    end
    A --> B
    B --> D
    B --> C
```

## 2. الوصف التقني
- **Frontend**: Next.js 14/15 + Tailwind CSS + TypeScript.
- **Animations**: Framer Motion (للانتقالات السلسة).
- **Icons**: Lucide React.
- **Styling**: Tailwind CSS مع نظام 8px spacing.

## 3. تعريفات المسارات
| المسار | الغرض |
|-------|---------|
| `/` | الصفحة الرئيسية واكتشاف الكورسات |
| `/courses` | قائمة الكورسات مع البحث والتصفية |
| `/courses/[courseId]` | صفحة تفاصيل الكورس والمحتوى التعليمي |

## 4. نموذج البيانات
### 4.1 تعريف نموذج البيانات
```mermaid
erDiagram
    COURSE {
        string id
        string title
        string duration
        int lessons
        int enrolled
        string language
    }
    COMMENT {
        int id
        string name
        string date
        string text
    }
    COURSE ||--o{ COMMENT : has
```

### 4.2 تعريف البيانات (Mock)
تخزن البيانات في ملفات TypeScript ثابتة داخل مجلد `src/data/` لمحاكاة استجابة الـ API.
