---
sidebar_position: 6
---

# Add Permissons

Permissions are set to get control of your phone and access to your **camera**, **photos**, **contact list**, **location**, and **phone storage**. App permission requests pop up the first time an app needs access to data on your phone and are related to user privacy.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/C76NBtL5MBo" title="Add permission actions in DhiWise mobile app builders" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In Permissions, a helper class file is added under Utilities-> Permissions -> `CameraPermissions.swift`, likewise the same for other permissions.

Under `info.Plist` file all the required parameters for permissions are set.

The permission call setup is generated in View.swift file, as below is the example for Camera + Gallery permission.

```js title="CameraPermission.swift"
Button(
  action: {
    CameraPermission.shared.request(result: { isGranted in
      GalleryPermission.shared.request(result: { isGranted in
        if !isGranted {
          GalleryPermission.shared.onDeniedOrRestricted()
        }
      })
    })
  },
  label: {
    Text(StringConstants.kLblCameraGallery)
  }
)
```

```js title="ContactPermission.swift"
Button(
  action: {
    ContactPermission.shared.request(result: { isGranted in
      if !isGranted {
        ContactPermission.shared.onDeniedOrRestricted()
      }
    })
  },
  label: {
    Text(StringConstants.kLblContact)
  }
)
```

```js title="LocationPermission.swift"

Button(
  action: {
    let location = LocationPermission()
    location.request()
    location.result = { isGranted in
      if !isGranted {
        location.onDeniedOrRestricted()
      }
    }
  },
  label: {
    Text(StringConstants.kLblLocation)
  }
)
```


<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).