# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.1.0...v1.2.0) (2026-08-11)


### Features

* sync client with 2026-08-09 backend update (maintenance & calibration module) ([669bfbb](https://github.com/ertugrulyalaniz/qrpoint-api-client/commit/669bfbb2c90a1ddc5277f189b06a32526dd1040b))

#### Talep (Demand) modülü

* `DataDemandCategoryAccountsService` eklendi — `DemandCategoryAccounts` tablosu, `/api/data/demand-category-accounts` (create/update/delete/batch/bulk/getbyid/getall/getpaged)
* `DemandCategoryDto.isAutoSetLocationResponsible` alanı eklendi (Otomatik Kat Sorumlusu Ata)
* `DemandCategoryDto.allowSelectResponisbleOnScreen` alanı eklendi (Ekrandan Sorumlu Seçimine İzin Ver — alan adındaki "Responisble" yazımı backend'den geldiği gibi korunmuştur)
* `ActivityDto.relatedActivityId` alanı eklendi (İlişkili Aktivite)

#### Bakım ve Kalibrasyon modülü

* `DataPeriodsService` eklendi — Dönemler, `Periods` tablosu, `/api/data/periods` (full CRUD)
* `DataMaintenanceTypesService` eklendi — Bakım Tipleri, `MaintenanceTypes` tablosu, `/api/data/maintenance-types` (full CRUD)
* `DataMaintenancePlansService` eklendi — Bakım Planı (Asset bazında), `MaintenancePlans` tablosu, `/api/data/maintenance-plans` (full CRUD)
* `DataCalibrationPlansService` eklendi — Kalibrasyon Planı (Asset bazında), `CalibrationPlans` tablosu, `/api/data/calibration-plans` (full CRUD)
* `DataBrandsService` eklendi — Markalar, `Brands` tablosu, `/api/data/brands` (full CRUD)
* `DataBrandModelsService` eklendi — Modeller, `BrandModels` tablosu, `/api/data/brand-models` (full CRUD)
* `DataActivityMaintenancesService` eklendi — `ActivityMaintenances` tablosu, `/api/data/activity-maintenances` (full CRUD)
* `DataIntervalUnitsService` eklendi — `/api/data/interval-units` (read-only: getbyid/getall/getpaged; duyuruda yer almıyordu, spec ile geldi)
* `AssetDto`'ya yeni alanlar eklendi:
  * `assetCode` (Varlık Kodu)
  * `requiresLocationVerification` (Konum Doğrulaması Zorunlu)
  * `brandId` (Marka)
  * `brandModelId` (Model)
  * `serialNo` (Seri No)
  * `expireDate` (Son Kullanım Tarihi)
  * `validUntil` (Geçerlilik Tarihi)
  * `requiresCalibration` (Kalibrasyon Zorunlu)
  * `requiresMaintenance` (Bakım Zorunlu)
* `ActivityDto.postponedReason` (Erteleme Sebebi) ve `ActivityDto.postponedAt` (Erteleme Zamanı) alanları eklendi
* `AttachmentTypeDto.organizationId` alanı eklendi
* `MasterDataDto`, `LookupDataDto`, `AssetCategoryDto` yeni modüle uygun olarak güncellendi

### ⚠️ Kaldırılanlar (upstream breaking)

* `/api/data/attachments/*` endpoint'leri backend spec'inden kaldırıldı — `DataAttachmentsService` ve `AttachmentDto` client'tan silindi. Bu servisi kullanan tüketiciler bu sürüme geçmeden önce kodlarını güncellemelidir.

### Bilinen eksikler (2026-08-09 duyurusuna göre)

* `AssetAttachments` tablosu için spec'te henüz endpoint/schema yok (duyuruda endpoint yanlışlıkla `/api/data/attachment-types` olarak yazılmıştı)
* `attachment-types` hâlâ read-only (create/update/delete yok) — "Döküman Tipleri ekranı" için yazma endpoint'leri bekleniyor

<details>
<summary>Kaynak: Hakan Lüleci'nin 2026-08-09 tarihli güncelleme duyurusu</summary>

> **[8/9/26, 6:56 PM] Taleple ilgili eklenenler**
> * DemandCategoryAccounts tablosu oluşturuldu.
> * DemandCategories.IsAutoSetLocationResponsible (Otomatik Kat Sorumlusu Ata) alanı eklendi.
> * DemandCategories.AllowSelectResponisbleOnScreen (Ekrandan Sorumlu Seçimine İzin Ver) alanı eklendi.
> * Activities.RelatedActivityId (İlişkili Aktivite) alanı eklendi.
>
> **Bakım ve Kalibrasyon ile ilgili eklenenler**
> * Dönemler ekranı tanımlanmalı. Tablo: Periods. EndPoint: /api/data/periods
> * Bakım Tipleri ekranı tanımlanmalı. Tablo: MaintenanceTypes. EndPoint: /api/data/maintenance-types
> * Bakım Planı ekranı tanımlanmalı (Asset bazında). Tablo: MaintenancePlans. EndPoint: /api/data/maintenance-plans
> * Kalibrasyon Planı ekranı tanımlanmalı (Asset bazında). Tablo: CalibrationPlans. EndPoint: /api/data/calibration-plans
> * Döküman Tipleri ekranı tanımlanmalı. Tablo: AttachmentTypes. EndPoint: /api/data/attachment-types
> * Varlıklar ekranı olmalı. Burada varlıklara ait dokümanlar eklenebilmeli (1-n). Tablo: AssetAttachments. EndPoint: /api/data/attachment-types *(sic — muhtemelen /api/data/asset-attachments olacak)*
> * Markalar ekranı tanımlanmalı. Tablo: Brands. EndPoint: /api/data/brands
> * Modeller ekranı tanımlanmalı. Tablo: BrandModels. EndPoint: /api/data/brand-models
> * Assets tablosuna şu alanlar eklendi: AssetCode (Varlık Kodu), RequiresLocationVerification (Konum Doğrulaması Zorunlu), BrandId (Marka), BrandModelId (Model), SerialNo (Seri No), ExpireDate (Son Kullanım Tarihi), ValidUntil (Geçerlilik Tarihi), RequiresCalibration (Kalibrasyon Zorunlu), RequiresMaintenance (Bakım Zorunlu)
> * ActivityMaintenances tablosu eklendi
> * Activies.PostponedReason (Erteleme Sebebi) ve Activies.PostponedAt (Erteleme Zamanı) alanları eklendi

</details>

## [1.1.0](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.23...v1.1.0) (2026-06-29)


### Features

* add LocationAccounts endpoints and sync generated client ([2bedd47](https://github.com/ertugrulyalaniz/qrpoint-api-client/commit/2bedd474a1c1bd19dd0715ae84b6ad7ff80ae75f))

### [1.0.23](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.22...v1.0.23) (2026-04-30)

### [1.0.22](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.21...v1.0.22) (2026-04-30)

### [1.0.21](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.20...v1.0.21) (2026-04-07)

### [1.0.20](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.19...v1.0.20) (2026-04-07)

### [1.0.19](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.18...v1.0.19) (2026-03-22)

### [1.0.18](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.17...v1.0.18) (2026-03-22)

### [1.0.17](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.16...v1.0.17) (2025-12-19)

### [1.0.16](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.15...v1.0.16) (2025-12-19)

### [1.0.15](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.14...v1.0.15) (2025-12-14)

### [1.0.14](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.13...v1.0.14) (2025-12-14)

### [1.0.13](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.12...v1.0.13) (2025-12-14)

### [1.0.12](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.11...v1.0.12) (2025-12-11)

### [1.0.11](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.10...v1.0.11) (2025-12-11)

### [1.0.10](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.9...v1.0.10) (2025-12-11)

### [1.0.9](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.8...v1.0.9) (2025-11-25)

### [1.0.8](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.7...v1.0.8) (2025-11-25)

### [1.0.7](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.6...v1.0.7) (2025-11-25)

### [1.0.6](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.5...v1.0.6) (2025-11-25)

### [1.0.5](https://github.com/ertugrulyalaniz/qrpoint-api-client/compare/v1.0.4...v1.0.5) (2025-11-25)

### 1.0.4 (2025-11-21)
